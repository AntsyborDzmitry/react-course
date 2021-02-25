import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/content/editMovie/editButton.scss';

export default function circleMenu(props) {
  const { externalRef } = props;

  const openEditMenu = () => {
    externalRef.current.classList.remove('display-none');
  };

  return (
    <div className="circle" ref={externalRef} onClick={openEditMenu}>
      <div />
      <div />
      <div />
    </div>
  );
}

circleMenu.propTypes = {
  externalRef: PropTypes.shape({
    current: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
    ]),
  }).isRequired,
};
