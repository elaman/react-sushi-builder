import * as types from "../actions/types";

const initialState = {
  ingredients: {
    avocadoMaki: { quantity: 1, price: 6.9, label: "Avocado Maki" },
    avocadoTunaRoll: { quantity: 1, price: 10.12, label: "Avocado Tuna Roll" },
    californiaMaki: { quantity: 1, price: 8.42, label: "California Maki" },
    californiaTunaRoll: { quantity: 1, price: 11.11, label: "California Tuna Roll" },
    ikuraMaki: { quantity: 1, price: 15.32, label: "Ikura Maki" },
    salmonMaki: { quantity: 1, price: 12.1, label: "Salmon Maki" },
  },
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity + 1,
          },
        },
        price: state.price + state.ingredients[action.ingredient].price,
      };

    case types.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: {
            ...state.ingredients[action.ingredient],
            quantity: state.ingredients[action.ingredient].quantity - 1,
          },
        },
        price: state.price - state.ingredients[action.ingredient].price,
      };

    default:
      return state;
  }
};
