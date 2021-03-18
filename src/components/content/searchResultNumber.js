import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../../styles/content/searchResultNumber.scss';

function searchResultNumber(props) {
  const { movies } = props;

  return (
    <div className="search-result-number">
      <span>{movies?.length}</span>
      {' movies found'}
    </div>
  );
}

searchResultNumber.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      tagline: PropTypes.string,
      runtime: PropTypes.number,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
};

const mapStateToProps = (state) => ({ movies: state.movie.movies });

export default connect(mapStateToProps, null)(searchResultNumber);
