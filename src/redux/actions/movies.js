import {
  LOAD_MOVIES,
  LOAD_ERROR,
  RESPONSE_PAGE,
  LOAD_MORE_MOVIES,
  MOVIE_TYPE
} from '../actionTypes';
import { fetch_movie } from '../../misc/movie_api';

export const loadMovies = (category, pageNumber) => async (dispatch) => {
  try {
    // const res = await fetch_movie(category, pageNumber);
    const res = await getMovies(category, pageNumber);

    const { page, total_pages, results } = res.data;

    dispatch({ type: LOAD_MOVIES, payload: results });

    dispatch({
      type: RESPONSE_PAGE,
      payload: {
        page: page,
        totalPages: total_pages
      }
    });
  } catch (err) {
    console.log(err);

    dispatch({ type: LOAD_ERROR, payload: err.message });
  }
};

export const loadMoreMovies = (category, pageNumber) => async (dispatch) => {
  try {
    const res = await getMovies(category, pageNumber);

    const { page, total_pages, results } = res.data;

    dispatch({
      type: LOAD_MORE_MOVIES,
      payload: {
        results,
        page,
        totalPages: total_pages
      }
    });

    // dispatch({
    //   type: RESPONSE_PAGE,
    //   payload: {
    //     page,
    //     totalPages: total_pages
    //   }
    // });
  } catch (err) {
    dispatch({ type: LOAD_ERROR, payload: err.message });
  }
};

export const setMovieType = (type) => async (dispatch) => {
  dispatch({ type: MOVIE_TYPE, payload: type });
};

export const incrementResponsePageNumber =
  (currentPage, totalPages) => async (dispatch) => {
    dispatch({ type: RESPONSE_PAGE, payload: { currentPage, totalPages } });
  };

const getMovies = async (category, pageNumber) => {
  const res = await fetch_movie(category, pageNumber);

  return res;
};