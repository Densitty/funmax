import React from 'react';
import PropTypes from 'prop-types';
import Rating from '../rating/Rating';
import './MoviesGrid.scss';

const MoviesGrid = (props) => {
  return (
    <>
      <section className="movies__grid">
        {props.images.map((image) => {
          return (
            <div key={image.id}>
              <div
                className="movies__grid__cell"
                style={{ backgroundImage: `url(${image.image})` }}
              >
                <div className="movies__grid__cell__btn">
                  <button>Read More</button>
                </div>
                <div className="movies__grid__cell__details">
                  <span className="movies__grid__cell__details__title">
                    When Amstel First Met Kemi
                  </span>
                  <div className="movies__grid__cell__details__rating">
                    {/* <span> */}
                    <Rating rating={image.rating} />
                    {/* </span> */}
                    <div className="movies__grid__cell__details__vote">
                      {image.rating}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

MoviesGrid.propTypes = {
  images: PropTypes.array.isRequired
};

export default MoviesGrid;
