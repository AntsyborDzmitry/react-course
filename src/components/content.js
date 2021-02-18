import React from 'react';
import SearchResultNumber from './searchResultNumber';
import Nav from './nav';
import MovieList from './movieList';
import { movies, searchResultNumber } from './fakeData';

export default function content() {
  return (
    <div className="content">
      <Nav />
      <SearchResultNumber resultNumber={searchResultNumber} title=" movies found" />
      <MovieList movies={movies} />
    </div>
  );
}
