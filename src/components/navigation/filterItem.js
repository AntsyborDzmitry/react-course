import React from 'react';
import PropTypes from 'prop-types';

export default function filterItem(props) {
  const { category, activityStatus } = props;

  return (
    <>
      <div className={activityStatus}>{category}</div>
    </>
  );
}

filterItem.propTypes = {
  activityStatus: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
