import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const Tab = (props) => {
  const { activeTab, label, setClick } = props;
  const [className, setClassName] = useState('tab-list-item');

  const onTabClick = () => {
    setClick(label);
  };

  useEffect(() => {
    if (activeTab === label) {
      setClassName((prev) => `${prev} tab-list-active`);
    } else {
      setClassName('tab-list-item');
    }
  }, [activeTab, label]);

  return (
    <>
      <li className={className} onClick={onTabClick}>
        {label}
      </li>
    </>
  );
};

Tab.propTypes = {
  activeTab: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  setClick: PropTypes.func.isRequired
};

export default Tab;
