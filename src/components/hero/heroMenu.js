import React from 'react';
import AddMovie from './addMovie';
import '../../styles/hero/heroMenu.scss';

export default function heroMenu() {
  return (
    <div className="hero-menu">
      <AddMovie />
    </div>
  );
}
