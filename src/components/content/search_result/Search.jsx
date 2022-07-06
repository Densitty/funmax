import React, { useState, useEffect } from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
import Rating from '../rating/Rating';
import './Search.scss';
import '../movies_grid/MoviesGrid.scss';
import { image_url } from '../../../misc/movie_api';
// import LazyImage from '../../lazy-image/LazyImage';

const Search = () => {
  const [movieData, setMovieData] = useState([]);
  const data = useSelector((state) => state.movies);
  const { movieSearchedFor, searchResult } = data;

  // console.log(movies_list);

  useEffect(() => {
    setMovieData(searchResult);
  }, [searchResult]);

  return (
    <div className="search__keyword">
      <div className="search__grid__title">
        <span className="search__grid__title__text">You searched for</span>
        <span className="search__grid__title__query">{movieSearchedFor}</span>
      </div>
      <section className="movies__grid">
        {movieData.map((movie, index) => {
          return (
            <React.Fragment key={movie.id}>
              {movie.poster_path && (
                <article>
                  <div
                    className="movies__grid__cell"
                    style={{
                      backgroundImage: `url(${image_url}${movie.poster_path})`
                    }}
                    // src={`(${image_url}${movie.backdrop_path})`}
                    alt="placeholder"
                  >
                    <div className="movies__grid__cell__btn">
                      <button>Read More</button>
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
              )}
            </React.Fragment>
          );
        })}
      </section>
    </div>
  );
};

Search.propTypes = {};

export default Search;
