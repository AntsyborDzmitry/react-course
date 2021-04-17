import React from 'react';
import PropTypes from 'prop-types';

function searchIconElement(props) {
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

export default React.memo(searchIconElement);

searchIconElement.propTypes = {
  clickListener: PropTypes.func,
};
