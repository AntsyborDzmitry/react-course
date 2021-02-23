import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/button.scss';

export default function button(props) {
  const {
    cssClass,
    title,
    clickListener,
    type,
  } = props;

  return (
    <button className={cssClass} type={type} onClick={clickListener}>
      {title}
    </button>
  );
}

button.propTypes = {
  cssClass: PropTypes.string,
  type: PropTypes.string,
  title: PropTypes.string.isRequired,
  clickListener: PropTypes.func,
};

button.defaultProps = {
  type: 'button',
};
