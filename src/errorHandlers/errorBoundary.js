import React from 'react';
import PropTypes from 'prop-types';
import '../styles/common/error.scss';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    const { hasError } = this.state;
    const { errorMessage, children } = this.props;
    if (hasError) {
      return <div className="error"><h1>{errorMessage}</h1></div>;
    }
    return children;
  }
}
ErrorBoundary.propTypes = {
  errorMessage: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
