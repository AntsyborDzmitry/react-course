import React from 'react';
import PropTypes from 'prop-types';
import Search from './search';
import HeaderMenu from './headerMenu';

export default function headerContent(props) {
  const {
    movieDetailsVisibility,
  } = props;

  return (
    <div className={`header-content ${movieDetailsVisibility}`}>
      <HeaderMenu />
      <Search />
      <div className="concord-img-gradient" />
    </div>
  );
}

headerContent.propTypes = {
  movieDetailsVisibility: PropTypes.string.isRequired,
};
