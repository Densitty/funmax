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
