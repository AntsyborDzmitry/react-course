import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchAsync from './searchAsync';
import HeroMenuAsync from './heroMenuAsync';

function heroContent(props) {
  const { visibility } = props;

  return (
    <div className={`hero-content ${visibility}`}>
      <HeroMenuAsync />
      <SearchAsync />
      <div className="concord-img-gradient" />
    </div>
  );
}

heroContent.propTypes = {
  visibility: PropTypes.string.isRequired,
};

const mapStateToProps = (state) => ({ visibility: state.movieDetails.visibility });

export default connect(mapStateToProps, null)(heroContent);
