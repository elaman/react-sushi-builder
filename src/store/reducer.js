import * as actions from "./actions";

const initialState = {
  ingredients: null,
  price: 100,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.ADD_INGREDIENT:
      return state;

    case actions.REMOVE_INGREDIENT:
      return state;

    default:
      return state;
  }
};
