import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { image_url } from '../../../misc/movie_api';
import {
  incrementResponsePageNumber,
  loadMovies
} from '../../../redux/actions/movies';
import MoviesGrid from '../movies_grid/MoviesGrid';
import PaginateMovies from '../paginate_movies/PaginateMovies';
import Slideshow from '../slideshow/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  const dispatch = useDispatch();
  const { movies_list, movie_type, page, totalPages } = useSelector(
    (state) => state.movies
  );

  const [currentPage, setCurrentPage] = useState(page);
  const [movieImages, setMovieImages] = useState([]);

  const HEADER_TYPE = {
    now_playing: 'Now Playing',
    popular: 'Popular',
    top_rated: 'Top Rated',
    upcoming: 'Upcoming'
  };

  // sort the movies randomly and get the 5 out of them
  const randomMovies = movies_list
    .sort(() => Math.random() - Math.random())
    .slice(0, 5);

  useEffect(() => {
    if (randomMovies.length) {
      const movie_images = [
        {
          id: 1,
          image: `${image_url}/${randomMovies[0].poster_path}`
        },
        {
          id: 2,
          image: `${image_url}/${randomMovies[1].poster_path}`
        },
        {
          id: 3,
          image: `${image_url}/${randomMovies[2].poster_path}`
        },
        {
          id: 4,
          image: `${image_url}/${randomMovies[3].poster_path}`
        },
        {
          id: 5,
          image: `${image_url}/${randomMovies[4].poster_path}`
        }
      ];

      setMovieImages(movie_images);
    }
  }, []);

  useEffect(() => {
    setCurrentPage(page);
  }, [page, totalPages]);

  const paginate = (type) => {
    let pageNumber = currentPage;
    if (type === 'prev' && currentPage >= 1) {
      pageNumber -= 1;
    } else {
      pageNumber += 1;
    }
    setCurrentPage(pageNumber);
    dispatch(incrementResponsePageNumber(pageNumber, totalPages));
    dispatch(loadMovies(movie_type, pageNumber));
  };

  const myProps = {
    currentPage,
    totalPages,
    paginate
  };

  return (
    <div className="main__content">
      <Slideshow images={movieImages} autoSlide={true} />
      <section className="movie__grid">
        <div className="movie__grid__type">{HEADER_TYPE[movie_type]}</div>
        <div className="movie__grid__paginate">
          <PaginateMovies
            {...myProps}
            // currentPage={currentPage}
            // totalPages={totalPages}
            // paginate={paginate}
          />
        </div>
      </section>
      {/* movie display component */}
      <MoviesGrid />
    </div>
  );
};

export default MainContent;
