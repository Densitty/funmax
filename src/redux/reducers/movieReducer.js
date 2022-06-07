import { LOAD_MOVIES } from '../actionTypes';

const initialState = {
  movies: []
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies: ['IRON MAN']
      };

    default:
      return state;
  }
}

export default reducer;
