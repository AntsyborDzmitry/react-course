import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/footer.scss';
import ErrorBoundary from '../../errorHandlers/errorBoundary';
import { BOUNDARY_ERROR_MESSAGE } from '../../data/constant';

export default function footer(props) {
  const { children } = props;
  return (
    <ErrorBoundary errorMessage={BOUNDARY_ERROR_MESSAGE}>
      <div className="footer">
        {children}
      </div>
    </ErrorBoundary>
  );
}

footer.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
