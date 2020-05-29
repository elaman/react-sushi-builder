import * as types from "../actions/types";

const initialState = {
  ingredients: {
    avocadoMaki: 1,
    avocadoTunaRoll: 1,
    californiaMaki: 1,
    californiaTunaRoll: 1,
    ikuraMaki: 1,
    salmonMaki: 1,
  },
  price: 100,
};

const PRICES = {
  avocadoMaki: 6.9,
  avocadoTunaRoll: 10.12,
  californiaMaki: 8.42,
  californiaTunaRoll: 11.11,
  ikuraMaki: 15.32,
  salmonMaki: 12.1,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        price: state.price + PRICES[action.ingredient],
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        price: state.price - PRICES[action.ingredient],
      };

    default:
      return state;
  }
};
