import { combineReducers } from 'redux';
import errorReducer from './errorReducer';
import moviesReducer from './movieReducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  error: errorReducer
});

export default rootReducer;
