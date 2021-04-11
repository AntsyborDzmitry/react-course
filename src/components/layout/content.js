import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/content.scss';

export default function content(props) {
  const { children } = props;
  return (
    <main className="content">
      {children}
    </main>
  );
}

content.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
