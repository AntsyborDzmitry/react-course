import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/layout/header.scss';
import ErrorBoundary from '../../errorHandlers/errorBoundary';
import { BOUNDARY_ERROR_MESSAGE } from '../../data/constant';

export default function header(props) {
  const { children } = props;
  return (
    <ErrorBoundary errorMessage={BOUNDARY_ERROR_MESSAGE}>
      <div className="header">
        {children}
      </div>
    </ErrorBoundary>
  );
}

header.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
