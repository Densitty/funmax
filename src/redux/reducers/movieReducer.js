import {
  LOAD_MORE_MOVIES,
  LOAD_MOVIES,
  MOVIE_TYPE,
  RESPONSE_PAGE,
  MOVIE_QUERIED_FOR,
  SEARCH_RESULT
} from '../actionTypes';

const initialState = {
  movies_list: [],
  page: 1,
  totalPages: 0,
  movie_type: 'now_playing',
  movieSearchedFor: '',
  searchResult: []
  // loading: false
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case LOAD_MOVIES:
      return {
        ...state,
        movies_list: action.payload
      };

    case RESPONSE_PAGE:
      return {
        ...state,
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };

    case LOAD_MORE_MOVIES:
      return {
        ...state,
        movies_list: [...state.movies_list, ...action.payload.results],
        page: action.payload.page,
        totalPages: action.payload.totalPages
      };

    case MOVIE_TYPE:
      return {
        ...state,
        movie_type: action.payload
      };

    case MOVIE_QUERIED_FOR:
      return {
        ...state,
        movieSearchedFor: action.payload
      };

    case SEARCH_RESULT:
      return {
        ...state,
        searchResult: action.payload
      };

    default:
      return state;
  }
}

export default reducer;
