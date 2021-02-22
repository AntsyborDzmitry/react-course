import React from 'react';
import PropTypes from 'prop-types';

export default function categoryItem(props) {
  const { category, activityStatus } = props;

  return (
    <>
      <div className={activityStatus}>{category}</div>
    </>
  );
}

categoryItem.propTypes = {
  activityStatus: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
