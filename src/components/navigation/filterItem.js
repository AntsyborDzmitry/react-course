import React from 'react';
import PropTypes from 'prop-types';

export default function filterItem(props) {
  const {
    category,
    activityStatus,
    doFiltering,
    dataKey,
  } = props;

  const clickHandler = (e) => {
    doFiltering(e.target?.dataset?.key);
  };
  return (
    <>
      <div data-key={dataKey} className={activityStatus} onClick={clickHandler}>{category}</div>
    </>
  );
}

filterItem.propTypes = {
  activityStatus: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  dataKey: PropTypes.string.isRequired,
  doFiltering: PropTypes.func.isRequired,
};
