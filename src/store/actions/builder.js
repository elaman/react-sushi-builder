import axios from "../../axios";
import {
  ADD_INGREDIENT,
  REMOVE_INGREDIENT,
  SET_INGREDIENTS
} from "./types";

export const add = (dispatch, ingredient) => dispatch({
  type: ADD_INGREDIENT, ingredient
});

export const remove = (dispatch, ingredient) => dispatch({
  type: REMOVE_INGREDIENT, ingredient
});

export const set = (dispatch, ingredients) => dispatch({
  type: SET_INGREDIENTS, ingredients
});

export const load = (dispatch) => axios
  .get("/ingredients.json")
  .then(({ data }) => set(dispatch, data))
  .catch(() => {});