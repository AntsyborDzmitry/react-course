import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/button.scss';

export default function button(props) {
  const { cssClass, title } = props;
  return (
    <>
      <button className={cssClass} type="button">{title}</button>
    </>
  );
}

button.propTypes = {
  cssClass: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
