import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (dispatch, orders) => dispatch({
  type: SET_ORDERS, orders
});

export const load = (dispatch, token, id) => axios
  .get("/orders.json?auth=" + token + '&orderBy="userId"&equalTo="' + id + '"')
  .then(({ data }) => set(dispatch, data))
  .catch(() => {});