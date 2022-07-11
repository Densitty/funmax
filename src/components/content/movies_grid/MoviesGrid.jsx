import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { /* useDispatch, */ useSelector } from 'react-redux';
import Rating from '../rating/Rating';
import './MoviesGrid.scss';
import { image_url } from '../../../misc/movie_api';
// import LazyImage from '../../lazy-image/LazyImage';

const MoviesGrid = () => {
  const [movieData, setMovieData] = useState([]);
  const data = useSelector((state) => state.movies);
  const { movies_list } = data;

  // console.log(movies_list);

  useEffect(() => {
    setMovieData(movies_list);
  }, [movies_list]);

  const formatTitle = (title) => {
    return title.toLowerCase().replace(/ /g, '-');
  };

  return (
    <>
      <section className="movies__grid">
        {movieData.map((movie, index) => {
          console.log(movie);
          return (
            <article key={index}>
              <div
                className="movies__grid__cell"
                style={{
                  backgroundImage: `url(${image_url}${movie.backdrop_path})`
                }}
                // src={`(${image_url}${movie.backdrop_path})`}
                alt="placeholder"
              >
                <div className="movies__grid__cell__btn">
                  <button>
                    <Link
                      to={`/${movie.id}/${formatTitle(movie.title)}/details`}
                    >
                      Read More
                    </Link>
                  </button>
                </div>
                <div className="movies__grid__cell__details">
                  <span className="movies__grid__cell__details__title">
                    {movie.title}
                  </span>
                  <div className="movies__grid__cell__details__rating">
                    {/* <span> */}
                    <Rating rating={movie.vote_average} />
                    {/* </span> */}
                    <div className="movies__grid__cell__details__vote">
                      {movie.vote_count}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </>
  );
};

MoviesGrid.propTypes = {};

export default MoviesGrid;
