import React from 'react';
import { FaFilm, FaFire, FaListUl, FaStar } from 'react-icons/fa';

const HEADER_LIST = [
  {
    id: 1,
    icon: <FaFilm />,
    name: 'Now Playing',
    type: 'now_playing'
  },
  {
    id: 2,
    icon: <FaFire />,
    name: 'Popular',
    type: 'popular'
  },
  {
    id: 3,
    icon: <FaStar />,
    name: 'Top Rated',
    type: 'top_rated'
  },
  {
    id: 4,
    icon: <FaListUl />,
    name: 'Upcoming',
    type: 'upcoming'
  }
];

export default HEADER_LIST;
