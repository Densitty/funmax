import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation, useNavigate, useMatch } from 'react-router-dom';
import HEADER_LIST from '../../misc/header_list';
import {
  loadMovies,
  setMovieType,
  incrementResponsePageNumber,
  searchResult,
  searchMovie,
  clearMovieDetails
} from '../../redux/actions/movies';
import './header.scss';

const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();
  // find if user is on the home route to display header or not
  const match = useMatch('/:id/name/details');

  const dispatch = useDispatch();
  const {
    // movie_type: movieType,
    page,
    totalPages
  } = useSelector((state) => state.movies);
  // console.log(movieType, page, totalPages);

  // const { movies_list, page, totalPages } = moviesData;

  const [menu, setMenu] = useState(false);
  const [navClass, setNavClass] = useState(false);
  const [type, setType] = useState('now_playing');
  const [searchTerm, setSearchTerm] = useState('');
  const [hideHeader, setHideHeader] = useState(false);

  // const navigateHome = () => history.push('/');

  const toggle = () => {
    setMenu(!menu);
    setNavClass(!navClass);
  };

  const changeMovieTypeUrl = (type) => {
    // if the current path is not exactly "/",
    if (location.pathname !== '/') {
      // 1. clear the movieDetails state and set to default value ([])
      dispatch(clearMovieDetails());
      // 2. navigate back to home page
      navigate('/');
    }
    setType(type);
    dispatch(setMovieType(type));
  };

  useEffect(() => {
    dispatch(loadMovies(type, page));
    dispatch(incrementResponsePageNumber(page, totalPages));
  }, [type]);

  useEffect(() => {
    if (navClass) {
      document.body.classList.add('header-nav-open');
    } else {
      document.body.classList.remove('header-nav-open');
    }

    if (match || location.pathname === '/') {
      setHideHeader(true);
    }

    // check if we are on the home page and if true, clear the movie_details (when the back btn on browser is clicked) state holding data for the previous movie clicked on
    if (location.pathname === '/') {
      dispatch(clearMovieDetails());
    }
  }, [location]);

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
    dispatch(searchResult(e.target.value));
    dispatch(searchMovie(e.target.value));
  };

  const handleClick = () => {
    dispatch(clearMovieDetails());
  };

  return (
    <div className="header">
      {hideHeader && (
        <header className="header-nav-wrapper">
          <div className="header-bar"></div>
          <div className="header-navbar">
            <div className="header-image" onClick={handleClick}>
              {/* <img
              src={logo}
              alt="logo"
              style={{ width: '80px', height: '60px' }}
            /> */}
              <Link to="/">
                <h1>Funmax</h1>
              </Link>
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
                  <li
                    key={list.id}
                    className={`header-nav-item ${
                      list.type === type ? 'active-item' : ''
                    }`}
                    onClick={() => changeMovieTypeUrl(list.type)}
                  >
                    <span className="header-list-name">{list.icon}</span>
                    <span className="header-list-name">{list.name}</span>
                  </li>
                );
              })}

              {location.pathname === '/' && (
                <input
                  type="text"
                  className="search-input"
                  placeholder="search for a movies"
                  onChange={handleChange}
                  value={searchTerm}
                />
              )}
            </ul>
          </div>
        </header>
      )}
    </div>
  );
};

export default Header;
