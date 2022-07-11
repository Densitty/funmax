import React from 'react';
import Rating from '../rating/Rating';
import Cast from './crew/Crew';
import './Details.scss';
import Media from './media/Media';
import Overview from './overview/Overview';
import Reviews from './reviews/Reviews';
import Tabs from './tabs/Tabs';

const Details = () => {
  return (
    <div className="details">
      <div
        className="details__background"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url(https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=600)'
        }}
      ></div>
      <div className="details__movie">
        <div className="details__movie__image">
          <img
            src="https://images.pexels.com/photos/1910225/pexels-photo-1910225.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="details__movie__body">
          <div className="movie-overview">
            <div className="title">
              Batman <span>2022-10-07</span>
            </div>
            <div className="movie-genres">
              <ul className="genres">
                <li>Action</li>
                <li>Animation</li>
                <li>Sci-Fi</li>
              </ul>
            </div>
            <div className="rating">
              <Rating className="rating-stars" rating={7.5} totalStars={10} />
              <span className="rating_value">6.5</span>{' '}
              <span className="rating_number">(200) reviews</span>
            </div>
            <Tabs>
              <div label="Overview">
                <Overview />
              </div>

              <div label="Media">
                <Media />
              </div>

              <div label="Cast">
                <Cast />
              </div>

              <div label="Reviews">
                <Reviews />
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
