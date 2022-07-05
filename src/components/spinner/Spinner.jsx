import React from 'react';
import './Spinner.scss';

const Spinner = () => {
  return (
    <div className="spinner">
      <div className="spinner__bouncer_1 bouncer"></div>
      <div className="spinner__bouncer_2 bouncer"></div>
      <div className="spinner__bouncer_3 bouncer"></div>
    </div>
  );
};

export default Spinner;
