import React from 'react';
import PropTypes from 'prop-types';

export default function searchElement(props) {
  const {
    clickListener,
  } = props;

  return (
    <div className="search-icon-wrapper" onClick={clickListener}>
      <div className="search-icon">
        <div className="search-icon_circle" />
        <div className="search-icon_rectangle" />
      </div>
    </div>
  );
}

searchElement.propTypes = {
  clickListener: PropTypes.func,
};
