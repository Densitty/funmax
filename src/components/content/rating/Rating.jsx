import React from 'react';
import PropTypes from 'prop-types';
import { FaRegStar, FaStar, FaStarHalfAlt } from 'react-icons/fa';
import './Rating.scss';

/* Rating logic
const st = 5;
Array.from({length: 5}, (ele, i) => {
  const number = i + 0.5;
  return st >= i + 1
    ? console.log(`1st part of ${st}`)
    : st >= number
    ? console.log(`2nd part of ${st}`)
    : console.log(`3rd part of ${st}`);
})
*/
const Rating = (props) => {
  const starRating = Array.from({ length: 10 }, (_, idx) => {
    const number = idx + 0.5;
    return (
      <span key={idx}>
        {props.rating >= idx + 1 ? (
          <FaStar />
        ) : props.rating >= number ? (
          <FaStarHalfAlt />
        ) : (
          <FaRegStar />
        )}
      </span>
    );
  });

  return (
    <div className="star__rating">
      <div className="star__rating__icons">{starRating}</div>
    </div>
  );
};

Rating.propTypes = {
  rating: PropTypes.number
};

export default Rating;
