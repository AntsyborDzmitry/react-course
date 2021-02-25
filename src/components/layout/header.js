import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/header.scss';

export default function header(props) {
  const { children } = props;

  return (
    <div className="header">
      {children}
      <div className="concord-img-gradient" />
    </div>
  );
}

header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
