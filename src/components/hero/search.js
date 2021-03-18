import React from 'react';
import Button from '../common/button';
import '../../styles/hero/search.scss';

export default function search() {
  return (
    <div className="search">
      <div className="search-title">find your movie</div>
      <div className="search-input">
        <input type="text" placeholder="What do you want to watch?" />
        <Button cssClass="search-button" title="search" />
      </div>
    </div>
  );
}
