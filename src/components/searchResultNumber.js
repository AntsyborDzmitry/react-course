import React from 'react';
import PropTypes from 'prop-types';

export default function searchResultNumber(props) {
  const { resultNumber, title } = props;

  return (
    <>
      <div className="search-result-number">
        <span>{resultNumber}</span>
        {title}
      </div>
    </>
  );
}

searchResultNumber.propTypes = {
  resultNumber: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
