import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content/searchResultNumber.scss';

export default function searchResultNumber(props) {
  const { resultNumber } = props;

  return (
    <div className="search-result-number">
      <span>{resultNumber}</span>
      {' movies found'}
    </div>
  );
}

searchResultNumber.propTypes = {
  resultNumber: PropTypes.string.isRequired,
};
