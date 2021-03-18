import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Search from './search';
import HeroMenu from './heroMenu';

function heroContent(props) {
  const { visibility } = props;

  return (
    <div className={`hero-content ${visibility}`}>
      <HeroMenu />
      <Search />
      <div className="concord-img-gradient" />
    </div>
  );
}

heroContent.propTypes = {
  visibility: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ visibility: state.movieDetails.visibility });

export default connect(mapStateToProps, null)(heroContent);
