import React from 'react';
import PropTypes from 'prop-types';

export default function buttonClose(props) {
  const {
    clickListener,
  } = props;

  return (
    <button type="button" className="close" aria-label="Close" onClick={clickListener}>
      <span aria-hidden="true">&times;</span>
    </button>
  );
}

buttonClose.propTypes = {
  clickListener: PropTypes.func,
};
