import * as types from "../actions/types";

const initialState = {
  ingredients: null,
  price: 100,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.ADD_INGREDIENT:
      newState.ingredients[action.ingredient].quantity++;
      newState.price = state.price + state.ingredients[action.ingredient].price;
      
      return newState;

    case types.REMOVE_INGREDIENT:
      newState.ingredients[action.ingredient].quantity--;
      newState.price = state.price - state.ingredients[action.ingredient].price;
      
      return newState;

    case types.SET_INGREDIENTS:
      newState.ingredients = action.ingredients;
      newState.price = initialState.price;

      return newState;

    default:
      return newState;
  }
};
