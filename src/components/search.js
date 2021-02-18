import React from 'react';
import PropTypes from 'prop-types';
import Button from './button';

export default function search(props) {
  const { searchTitle, searchPlaceholder } = props;

  return (
    <div className="search">
      <div className="search-title">{searchTitle}</div>
      <div className="search-input">
        <input type="text" placeholder={searchPlaceholder} />
        <Button title="search" />
      </div>
    </div>
  );
}

search.propTypes = {
  searchTitle: PropTypes.string.isRequired,
  searchPlaceholder: PropTypes.string.isRequired,
};
