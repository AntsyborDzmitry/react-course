import React from 'react';
import PropTypes from 'prop-types';
import '../../../styles/content/editMovie/editButton.scss';

export default function circleMenu(props) {
  const { stateHandler } = props;

  const openMenu = (cssClass) => () => {
    stateHandler(cssClass);
  };

  return (
    <div className="circle" onClick={openMenu('')}>
      <div />
      <div />
      <div />
    </div>
  );
}

circleMenu.propTypes = {
  stateHandler: PropTypes.func,
};
