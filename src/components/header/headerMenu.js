import React from 'react';
import Logo from '../common/logo';
import AddMovieContainer from './addMovieContainer';
import '../../styles/header/headerMenu.scss';

export default function headerMenu() {
  return (
    <div className="header-menu">
      <Logo logoLink="my-test-site.com" />
      <AddMovieContainer />
    </div>
  );
}
