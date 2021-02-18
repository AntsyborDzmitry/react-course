import React from 'react';
import DropDown from './dropDown';

export default function sortBar() {
  return (
    <div className="sort-bar">
      <div className="sort-title">sort by</div>
      <DropDown options={['release date', 'genre', 'title', 'year']} />
    </div>
  );
}
