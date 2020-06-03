import { AUTH_SUCCESS, AUTH_FAIL, AUTH_START } from "./types";
import axios from "axios";

export const start = (dispatch) => dispatch({
  type: AUTH_START
});

export const success = (dispatch, { idToken, localId }) => dispatch({
  type: AUTH_SUCCESS, id: idToken, token: localId
});

export const fail = (dispatch, errors) => dispatch({
  type: AUTH_FAIL, errors
});

export const auth = (dispatch, email, password) => axios
  .post("https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCrbFZwYZA20UbJRbWyM4rA25uOO-u3zXA", { email, password })
  .then(({ data }) => success(dispatch, data))
  .catch(error => fail(dispatch, error));