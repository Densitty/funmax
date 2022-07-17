import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import './Reviews.scss';

const Reviews = () => {
  const movieDetails = useSelector((state) => state.movies.movie_details);
  const [reviews] = useState(movieDetails[1].results);
  console.log(reviews);
  return (
    <>
      <div className="reviews">
        <div className="reviews__total">
          Reviews {reviews.length > 0 ? reviews.length : null}
        </div>
        {reviews.length > 0 ? (
          reviews.map((review) => {
            return (
              <div className="reviews__movie" key={review.id}>
                <h3>{review.author}</h3>
                <p>{review.content}</p>
              </div>
            );
          })
        ) : (
          <p>No reviews yet.</p>
        )}
      </div>
    </>
  );
};

export default Reviews;
