import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { image_url } from '../../../misc/movie_api';
import { displayMovieDetails } from '../../../redux/actions/movies';
import Rating from '../rating/Rating';
import Crew from './crew/Crew';
import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';

const Details = () => {
  const movieDetails = useSelector((state) => state.movies.movie_details);
  const dispatch = useDispatch();

  const params = useParams();
  const { id } = params;

  // dispatch(displayMovieDetails(id));
  const [details, setDetails] = useState();

  useEffect(() => {
    // dispatch movie details action only when movieDetails state changes
    if (movieDetails.length === 0) {
      dispatch(displayMovieDetails(id));
    }
    setDetails(movieDetails[0]);
  }, [movieDetails]);

  return (
    <>
      {details && (
        <div className="details">
          <div
            className="details__background"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(${image_url}/${details.backdrop_path})`
            }}
          ></div>
          <div className="details__movie">
            <div className="details__movie__image">
              <img
                src={`${image_url}/${details.poster_path}`}
                alt={details.original_title}
              />
            </div>
            <div className="details__movie__body">
              <div className="movie-overview">
                <div className="title">
                  {details.title} <span>{details.release_date}</span>
                </div>
                <div className="movie-genres">
                  <ul className="genres">
                    {/* <li>Action</li>
                    <li>Animation</li>
                    <li>Sci-Fi</li> */}
                    {details.genres.map((genre) => {
                      return <li key={genre.id}>{genre.name}</li>;
                    })}
                  </ul>
                </div>
                <div className="rating">
                  <Rating
                    className="rating-stars"
                    rating={details.vote_average}
                    totalStars={10}
                  />
                  <span className="rating_value">{details.vote_average}</span>{' '}
                  <span className="rating_number">
                    {details.vote_count} reviews
                  </span>
                </div>
                <Tabs>
                  <div label="Overview">
                    <Overview />
                  </div>

                  <div label="Media">
                    <Media />
                  </div>

                  <div label="Crew">
                    <Crew />
                  </div>

                  <div label="Reviews">
                    <Reviews />
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Details;
