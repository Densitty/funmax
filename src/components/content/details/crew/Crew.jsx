import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { image_url } from '../../../../misc/movie_api';

import './Crew.scss';

const Cast = () => {
  const movieDetails = useSelector((state) => state.movies.movie_details);

  const [details] = useState(movieDetails[2]);

  return (
    <>
      <div className="cast">
        <div className="cast__title">Crew</div>
        <table>
          <thead>
            <tr>
              <th></th>
              <th></th>
              <th className="head">Department</th>
              <th className="head">Job</th>
            </tr>
          </thead>
          <tbody>
            {details.crew.map((crew, idx) => {
              return (
                <tr key={idx}>
                  <td>
                    <img
                      src={
                        crew.profile_path
                          ? `${image_url}/${crew.profile_path}`
                          : 'https://via.placeholder.com/54x54'
                      }
                      alt={crew.name}
                    />
                  </td>
                  <td>{crew.name}</td>
                  <td>{crew.department}</td>
                  <td>{crew.job}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Cast;
