import React from 'react';
import AddMovieAsync from './addMovieAsync';
import '../../styles/hero/heroMenu.scss';

export default function heroMenu() {
  return (
    <div className="hero-menu">
      <AddMovieAsync />
    </div>
  );
}
