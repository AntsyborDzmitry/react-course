import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/hero.scss';

export default function hero(props) {
  const { children } = props;

  return (
    <div className="hero">
      {children}
    </div>
  );
}

hero.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
