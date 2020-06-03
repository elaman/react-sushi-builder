import * as types from "../actions/types";

const initialState = {
  data: null,
  errors: null,
  loading: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.AUTH_START:
      newState.data = null;
      newState.errors = null;
      newState.loading = true;
      return newState;

    case types.AUTH_SUCCESS:
      newState.data = action.data;
      newState.loading = false;
      return newState;

    case types.AUTH_FAIL:
      newState.errors = action.errors;
      newState.loading = false;
      return newState;

    default:
      return newState;
  }
};
