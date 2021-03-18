import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './search';
import HeaderMenu from './headerMenu';

function headerContent(props) {
  const { visibility } = props;

  return (
    <div className={`header-content ${visibility}`}>
      <HeaderMenu />
      <Search />
      <div className="concord-img-gradient" />
    </div>
  );
}

headerContent.propTypes = {
  visibility: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ visibility: state.movieDetails.visibility });

export default connect(mapStateToProps, null)(headerContent);
