import React from 'react';
import DropDown from './dropDown';
import '../../styles/navigation/sortBar.scss';

export default function sortBar() {
  return (
    <div className="sort-bar">
      <div className="sort-title">sort by</div>
      <DropDown options={['year', 'genre', 'title']} />
    </div>
  );
}
