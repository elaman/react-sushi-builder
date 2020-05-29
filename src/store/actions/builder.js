import { ADD_INGREDIENT, REMOVE_INGREDIENT } from "./types";

export const add = (dispatch, ingredient) => dispatch({
  type: ADD_INGREDIENT, ingredient
});

export const remove = (dispatch, ingredient) => dispatch({
  type: REMOVE_INGREDIENT, ingredient
});