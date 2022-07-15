import axios from 'axios';

const base_url = 'https://api.themoviedb.org/3';
const api_key = process.env.REACT_APP_API_KEY;

/* images
https://api.themoviedb.org/3/movie/{movie_id}/images?api_key=<<api_key>>
https://image.tmdb.org/t/p/original
*/

export const image_url = 'https://image.tmdb.org/t/p/original';

export const fetch_movie = async (category_type, pageNumber) => {
  return await axios.get(
    `${base_url}/movie/${category_type}?api_key=${api_key}&lang=en-US&page=${pageNumber}`
  );
};

export const search_movie = async (movie) => {
  return await axios.get(
    `${base_url}/search/movie?api_key=${api_key}&query=${movie}&language=en-US&include_adult=false`
  );
};

export const get_movie_details = async (id) => {
  return await axios.get(
    `${base_url}/movie/${id}?api_key=${api_key}&language=en-US`
  );
};

export const get_movie_credits = async (id) => {
  return await axios.get(
    `${base_url}/movie/${id}/credits?api_key=${api_key}&language=en-US`
  );
};

export const get_movie_images = async (id) => {
  return await axios.get(
    `${base_url}/movie/${id}/images?api_key=${api_key}&language=en-US&include_image_language=en`
  );
};

export const get_movie_videos = async (id) => {
  return await axios.get(
    `${base_url}/movie/${id}/videos?api_key=${api_key}&language=en-US`
  );
};

export const get_movie_reviews = async (id, page = 1) => {
  return await axios.get(
    `${base_url}/movie/${id}/reviews?api_key=${api_key}&language=en-US&page=${page}`
  );
};
