import axios from "../../axios";
import { SET_ORDERS } from "./types";

export const set = (dispatch, orders) => dispatch({
  type: SET_ORDERS, orders
});

export const load = (dispatch) => axios
  .get("/orders.json")
  .then(({ data }) => set(dispatch, data))
  .catch(() => {});