import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

import './Error.scss';

const Error = () => {
  return (
    <section className="error">
      <h1 className="error__header">Sorry!</h1>
      <p className="error__msg">Page does not exist</p>
      <Link to="/" className="error__link">
        <FaHome /> Go Home
      </Link>
    </section>
  );
};

export default Error;
