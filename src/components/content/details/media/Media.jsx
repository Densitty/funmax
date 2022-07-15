import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { image_url } from '../../../../misc/movie_api';

import './Media.scss';

const Media = () => {
  const movieDetails = useSelector((state) => state.movies.movie_details);
  const [trailers] = useState(movieDetails[4].results);
  const [images] = useState(movieDetails[3].posters);

  return (
    <>
      <div className="media">
        <div>
          <div className="media__title">Watch Trailer</div>
          <div className="media__videos">
            {trailers.map((trailer) => {
              return (
                <div className="media__videos__video" key={trailer.id}>
                  <iframe
                    title="Avengers"
                    style={{
                      width: '100%',
                      height: '100%'
                    }}
                    src={`https://www.youtube.com/embed/${trailer.key}`}
                    frameBorder="0"
                    allowFullScreen
                  />
                </div>
              );
            })}
          </div>
        </div>
        <div>
          <div className="media__title">Photos ({images.length})</div>
          <div className="media__images">
            {images.map((image, idx) => {
              return (
                <div
                  className="media__images__cell"
                  key={idx}
                  style={{
                    backgroundImage: `url(${image_url}/${image.file_path})`
                  }}
                ></div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default Media;
