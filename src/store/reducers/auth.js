import * as types from "../actions/types";

const initialState = {
  token: null,
  id: null,
  error: null,
  loading: false,
};

export default (state = initialState, action) => {
  const newState = { ...state };

  switch (action.type) {
    case types.AUTH_START:
      newState.token = null;
      newState.id = null;
      newState.error = null;
      newState.loading = true;
      return newState;

    case types.AUTH_SUCCESS:
      newState.token = action.token;
      newState.id = action.id;
      newState.loading = false;
      return newState;

    case types.AUTH_FAIL:
      newState.error = action.error;
      newState.loading = false;
      return newState;

    case types.AUTH_LOGOUT:
      newState.token = null;
      newState.id = null;
      return newState;

    default:
      return newState;
  }
};
