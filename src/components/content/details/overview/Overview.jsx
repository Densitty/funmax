import React, { useState, useEffect } from 'react';
import { /* useDispatch,  */ useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
import { image_url } from '../../../../misc/movie_api';

import './Overview.scss';

const Overview = () => {
  const movieDetails = useSelector((state) => state.movies.movie_details);
  const [details] = useState(movieDetails[0]);
  const [credits] = useState(movieDetails[2]);
  const [items, setItems] = useState([]);
  console.log(movieDetails);

  useEffect(() => {
    const detailItems = [
      {
        id: 0,
        name: 'Tagline',
        value: details.tagline
      },
      {
        id: 1,
        name: 'Budget',
        value: `${numberFormatter(details.budget, 1)}`
      },
      {
        id: 2,
        name: 'Revenue',
        value: `${numberFormatter(details.revenue, 1)}`
      },
      {
        id: 3,
        name: 'Status',
        value: details.status
      },
      {
        id: 4,
        name: 'Release Date',
        value: details.release_date
      },
      {
        id: 5,
        name: 'Run Time',
        value: `${details.runtime} min`
      }
    ];
    setItems(detailItems);

    // eslint-disable-next-line
  }, []);

  const numberFormatter = (number, digits) => {
    const symbolArray = [
      { value: 1, symbol: '' },
      { value: 1e3, symbol: 'K' },
      { value: 1e6, symbol: 'M' },
      { value: 1e9, symbol: 'B' }
    ];
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/;
    let result = '';

    for (let i = 0; i < symbolArray.length; i++) {
      if (number >= symbolArray[i].value) {
        result =
          (number / symbolArray[i].value).toFixed(digits).replace(regex, '$1') +
          symbolArray[i].symbol;
      }
    }
    return result;
  };

  return (
    <section className="overview">
      <section className="overview__column__1">
        <div className="description">{details.overview}</div>

        <div className="cast">
          <div className="cast__title">Cast</div>
          <table>
            <tbody>
              {credits.cast.map((cast) => {
                return (
                  <tr key={cast.id}>
                    <td>
                      <img
                        src={
                          cast.profile_path
                            ? `${image_url}/${cast.profile_path}`
                            : 'https://via.placeholder.com/54x54'
                        }
                        alt={cast.name}
                      />
                    </td>
                    <td>{cast.name}</td>
                    <td>{cast.character}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>

      <section className="overview__column__2">
        <article className="overview__column__2__detail">
          <h6>Production Companies</h6>
          {details.production_companies.map((company) => {
            return (
              <div
                className="overview__column__2__detail__product-company"
                key={company.id}
              >
                <img
                  src={
                    company.logo_path
                      ? `${image_url}/${company.logo_path}`
                      : 'https://via.placeholder.com/54x54'
                  }
                  alt={company.name}
                />
                <span>{company.name}</span>
              </div>
            );
          })}
        </article>
        <article className="overview__column__2__detail">
          <h6>Language(s)</h6>
          {/* <p>
            <a href="!#">English</a>
          </p> */}
          {details.spoken_languages.map((language, index) => {
            return (
              <p key={index}>
                <a href="!#">{language.name}</a>
              </p>
            );
          })}
        </article>
        {/* <div className="overview-detail">
          <h6>Tagline</h6>
          <p>
            <a href="!#">Tagline</a>
          </p>
        </div> */}
        {items.map((data) => (
          <article className="overview__column__2__detail" key={data.id}>
            <h6>{data.name}</h6>
            <p>
              <a href="!#">{data.value}</a>
            </p>
          </article>
        ))}
      </section>
    </section>
  );
};

export default Overview;
