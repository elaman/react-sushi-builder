import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START, AUTH_LOGOUT } from "./types";
import axios from "axios";

export const start = (dispatch) => dispatch({
  type: AUTH_START
});

export const success = (dispatch, { idToken, localId }) => dispatch({
  type: AUTH_SUCCESS, id: localId, token: idToken
});

export const fail = (dispatch, error) => dispatch({
  type: AUTH_FAIL, error
});

export const logout = (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("id");
  localStorage.removeItem("expirationDate");

  dispatch({
    type: AUTH_LOGOUT
  });
}

export const restore = (dispatch) => {
  const idToken = localStorage.getItem("idToken");
  const localId = localStorage.getItem("localId");

  if (idToken && localId) {
    const expirationDate = new Date(localStorage.getItem("expirationDate"));
    if (expirationDate > new Date()) {
      success(dispatch, { idToken, localId });
      timeout(dispatch, (expirationDate.getTime() - new Date().getTime()) / 1000);
    }
    else {
      logout(dispatch);
    }
  }
  else {
    logout(dispatch);
  }
}

export const timeout = (dispatch, seconds) => setTimeout(() => logout(dispatch), seconds * 1000);

const key = "AIzaSyCrbFZwYZA20UbJRbWyM4rA25uOO-u3zXA";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key;
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
export const auth = (dispatch, method, email, password) => axios
  .post(method === "signin" ? signInUrl : signUpUrl, { email, password, returnSecureToken: true })
  .then(({ data }) => {
    const expirationDate = new Date(new Date().getTime() + data.expiresIn * 1000);
    localStorage.setItem("expirationDate", expirationDate);
    localStorage.setItem("idToken", data.idToken);
    localStorage.setItem("localId", data.localId);

    success(dispatch, data);
    timeout(dispatch, +data.expiresIn);
  })
  .catch(error => fail(dispatch, error));