import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/content.scss';

export default function content(props) {
  const { children } = props;
  return (
    <div className="content">
      {children}
    </div>
  );
}

content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
