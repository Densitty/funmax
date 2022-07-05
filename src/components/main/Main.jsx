import React, { useState, useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
  loadMoreMovies,
  incrementResponsePageNumber
} from '../../redux/actions/movies';
import MainContent from '../content/main_content/MainContent';
import Spinner from '../spinner/Spinner';
import './Main.scss';

const Main = () => {
  const mainContainer = useRef(null);
  const pageEnd = useRef(null);

  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const { page, totalPages, movie_type } = movies;

  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(page);

  const fetchMoreMovies = () => {
    let pageNumber = currentPage;
    if (page < totalPages) {
      pageNumber += 1;
      setCurrentPage(pageNumber);
      dispatch(loadMoreMovies(movie_type, pageNumber));
    }
  };

  useEffect(() => {
    setLoading(true);

    setTimeout(() => setLoading(false), 3000);
  }, []);

  const handleScroll = () => {
    const divHeight = mainContainer.current.getBoundingClientRect().height;
    const pageEndDivTop = pageEnd.current.getBoundingClientRect().top;

    // console.log(divHeight, pageEndDivTop);

    if (pageEndDivTop <= divHeight) {
      // fetch more data
      fetchMoreMovies();
    }
  };

  useEffect(() => {
    // increase page number
    incrementResponsePageNumber(currentPage, totalPages);
  }, [currentPage, totalPages]);

  return (
    <div className="main" ref={mainContainer} onScroll={handleScroll}>
      {loading ? <Spinner /> : <MainContent />}

      <div ref={pageEnd}></div>
    </div>
  );
};

export default Main;
