import React, { useState } from 'react';
import MoviesGrid from '../movies_grid/MoviesGrid';
import PaginateMovies from '../paginate_movies/PaginateMovies';
import Slideshow from '../slideshow/Slideshow';
import './MainContent.scss';

const MainContent = () => {
  const images = [
    {
      id: 1,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
      name: 'maria ferguson',
      title: 'office manager',
      quote:
        'Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.',
      rating: 8.3
    },
    {
      id: 2,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
      name: 'john doe',
      title: 'regular guy',
      quote:
        'Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually, chambray listicle microdosing put a bird on it paleo subway tile squid umami.',
      rating: 7.5
    },
    {
      id: 3,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg',
      name: 'peter smith',
      title: 'product designer',
      quote:
        'Drinking vinegar polaroid street art echo park, actually semiotics next level butcher master cleanse hammock flexitarian ethical paleo.',
      rating: 9.3
    },
    {
      id: 4,
      image:
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
      name: 'susan andersen',
      title: 'the boss',
      quote:
        'Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical seitan kale chips fingerstache cloud bread mustache twee messenger bag. ',
      rating: 5.3
    }
  ];

  // eslint-disable-next-line no-unused-vars
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const paginate = (type) => {
    console.log(type);
    if (type === 'prev' && currentPage > 1) {
      // decrement page
      setCurrentPage((prev) => prev - 1);
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const myProps = {
    currentPage,
    totalPages,
    paginate
  };

  return (
    <div className="main__content">
      <Slideshow images={images} autoSlide={true} />
      <section className="movie__grid">
        <div className="movie__grid__type">Now Playing</div>
        <div className="movie__grid__paginate">
          <PaginateMovies
            {...myProps}
            // currentPage={currentPage}
            // totalPages={totalPages}
            // paginate={paginate}
          />
        </div>
      </section>
      {/* movie display component */}
      <MoviesGrid images={images} />
    </div>
  );
};

export default MainContent;
