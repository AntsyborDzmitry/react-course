import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/common/logo.scss';

export default function logo(props) {
  const { logoLink } = props;

  return (
    <div className="logo">
      <a href={logoLink}>
        <span className="prefix">netflix</span>
        <span className="postfix">roulette</span>
      </a>
    </div>
  );
}

logo.propTypes = {
  logoLink: PropTypes.string.isRequired,
};
