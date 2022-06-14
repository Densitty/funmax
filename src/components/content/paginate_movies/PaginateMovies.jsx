import React /* useEffect, useState  */ from 'react';
import PropTypes from 'prop-types';
import './PaginateMovies.scss';

const PaginateMovies = (props) => {
  const { currentPage, paginate, totalPages } = props;

  // const [page, setPage] = useState();
  // const [totalPageNumber, setTotalPageNumber] = useState();

  // useEffect(() => {
  //   setPage(currentPage);
  //   setTotalPageNumber(totalPages);
  // }, [currentPage, totalPages]);

  return (
    <>
      <span className="page__count">
        {/* {page} - {totalPageNumber} */}
        {currentPage} - {totalPages}
      </span>

      <button
        className={`paginate__button ${currentPage === 1 ? 'disable' : ''}`}
        onClick={() => paginate('prev')}
      >
        prev
      </button>

      <button
        className={`paginate__button ${
          currentPage === totalPages ? 'disable' : ''
        }`}
        onClick={() => paginate('next')}
      >
        next
      </button>
    </>
  );
};

PaginateMovies.propTypes = {
  currentPage: PropTypes.number.isRequired,
  paginate: PropTypes.func,
  totalPages: PropTypes.number
};

export default PaginateMovies;
