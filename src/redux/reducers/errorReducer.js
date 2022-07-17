import { LOAD_ERROR } from '../actionTypes';

const initialState = { error: null };

const errorReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ERROR:
      return {
        ...state,
        error: action.payload
      };

    default:
      return state;
  }
};

export default errorReducer;
