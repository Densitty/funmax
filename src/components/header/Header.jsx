import React, { useState, useEffect } from 'react';
import HEADER_LIST from '../../misc/header_list';
// import logo from '../../logo.svg';
import './header.scss';

const Header = () => {
  const [menu, setMenu] = useState(false);
  const [navClass, setNavClass] = useState(false);

  const toggle = () => {
    setMenu(!menu);
    setNavClass(!navClass);
  };

  useEffect(() => {
    console.log('making the overflow on body hidden');
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }
  }, [navClass]);

  return (
    <div className="header">
      <header className="header-nav-wrapper">
        <div className="header-bar"></div>
        <div className="header-navbar">
          <div className="header-image">
            {/* <img
              src={logo}
              alt="logo"
              style={{ width: '80px', height: '60px' }}
            /> */}
            <h1>Funmax</h1>
          </div>

          <div
            className={`header-menu-toggle ${menu ? ' is-active' : ''}`}
            id="header-mobile-menu"
            onClick={toggle}
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </div>

          <ul className={`header-nav ${navClass ? 'header-mobile-nav' : ''}`}>
            {/* <li className="header-nav-item">Now Playing</li>
            <li className="header-nav-item">New Movies</li> */}
            {HEADER_LIST.map((list) => {
              return (
                <li key={list.id} className="header-nav-item">
                  <span className="header-list-name">{list.icon}</span>
                  {/* &nbsp; */}
                  <span className="header-list-name">{list.name}</span>
                </li>
              );
            })}
            <input
              type="text"
              className="search-input"
              placeholder="search for a movies"
            />
          </ul>
        </div>
      </header>
    </div>
  );
};

export default Header;
