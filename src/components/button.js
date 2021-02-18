import React from 'react';
import PropTypes from 'prop-types';

export default function button(props) {
  const { title } = props;
  return (
    <>
      <button type="button">{title}</button>
    </>
  );
}

button.propTypes = {
  title: PropTypes.string.isRequired,
};
