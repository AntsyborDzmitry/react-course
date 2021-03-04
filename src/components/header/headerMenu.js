import React from 'react';
import Logo from '../common/logo';
import AddMovie from './addMovie';
import '../../styles/header/headerMenu.scss';

export default function headerMenu() {
  return (
    <div className="header-menu">
      <Logo logoLink="my-test-site.com" />
      <AddMovie />
    </div>
  );
}
