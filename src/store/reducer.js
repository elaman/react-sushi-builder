import * as actions from "./actions";

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

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
      };

    case actions.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
      };

    default:
      return state;
  }
};
