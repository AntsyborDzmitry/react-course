import React from 'react';
import { useSelector } from 'react-redux';
import '../../styles/content/searchResultNumber.scss';

export default function searchResultNumber() {
  const movies = useSelector((state) => state.movie.movies);
  return (
    <div className="search-result-number">
      <span>{movies?.length}</span>
      {' movies found'}
    </div>
  );
}
