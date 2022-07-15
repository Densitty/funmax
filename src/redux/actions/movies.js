import {
  LOAD_MOVIES,
  LOAD_ERROR,
  RESPONSE_PAGE,
  LOAD_MORE_MOVIES,
  MOVIE_TYPE,
  MOVIE_QUERIED_FOR,
  SEARCH_RESULT,
  MOVIE_DETAILS,
  CLEAR_MOVIE_DETAILS
} from '../actionTypes';
import {
  fetch_movie,
  get_movie_credits,
  get_movie_details,
  get_movie_images,
  get_movie_reviews,
  get_movie_videos,
  search_movie
} from '../../misc/movie_api';

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

export const searchMovie = (query) => async (dispatch) => {
  dispatch({ type: MOVIE_QUERIED_FOR, payload: query.trim().toLowerCase() });
};

export const searchResult = (query) => async (dispatch) => {
  try {
    if (query) {
      const res = await search_movie(query);
      const { results } = res.data;
      dispatch({ type: SEARCH_RESULT, payload: results });
    } else {
      dispatch({ type: SEARCH_RESULT, payload: [] });
    }
  } catch (err) {
    if (err.response) {
      dispatch({ type: LOAD_ERROR, payload: err.message });
    }
  }
};

export const displayMovieDetails = (id) => async (dispatch) => {
  try {
    const res = await getMovieDetails(id);

    dispatch({ type: MOVIE_DETAILS, payload: res });
  } catch (err) {
    if (err.response) {
      dispatch({ type: LOAD_ERROR, payload: err.message });
    }
  }
};

export const clearMovieDetails = () => async (dispatch) => {
  dispatch({ type: CLEAR_MOVIE_DETAILS });
};

export const incrementResponsePageNumber =
  (currentPage, totalPages) => async (dispatch) => {
    dispatch({ type: RESPONSE_PAGE, payload: { currentPage, totalPages } });
  };

const getMovies = async (category, pageNumber) => {
  const res = await fetch_movie(category, pageNumber);

  return res;
};

const getMovieDetails = async (id) => {
  const movie_details = await get_movie_details(id);
  const movie_reviews = await get_movie_reviews(id);
  const movie_credits = await get_movie_credits(id);
  const movie_images = await get_movie_images(id);
  const movie_videos = await get_movie_videos(id);

  const values = await Promise.all([
    movie_details,
    movie_reviews,
    movie_credits,
    movie_images,
    movie_videos
  ]);

  const res = values.map((value) => {
    return value.data;
  });

  return res;
};
