import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/footer.scss';

export default function footer(props) {
  const { children } = props;
  return (
    <div className="footer">
      {children}
    </div>
  );
}

footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
