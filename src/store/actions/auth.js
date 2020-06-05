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

export const logout = (dispatch) => dispatch({
  type: AUTH_LOGOUT
});

export const timeout = (dispatch, seconds) => setTimeout(() => logout(dispatch), seconds * 1000);

const key = "AIzaSyCrbFZwYZA20UbJRbWyM4rA25uOO-u3zXA";
const signInUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=" + key;
const signUpUrl = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=" + key;
export const auth = (dispatch, method, email, password) => axios
  .post(method === "signin" ? signInUrl : signUpUrl, { email, password, returnSecureToken: true })
  .then(({ data }) => {
    success(dispatch, data);
    timeout(dispatch, +data.expiresIn);
  })
  .catch(error => fail(dispatch, error));