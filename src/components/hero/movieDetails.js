import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SearchIconElement from '../common/searchIconElement';
import { getYearFromReleaseDate } from '../../utils/utils';
import { SHOW_MOVIE_DETAILS } from '../../redux/actions/actionTypes';
import '../../styles/hero/movieDetails.scss';
import '../../styles/common/searchIconElement.scss';

function movieDetails(props) {
  const {
    selectedMovie,
    visibility,
    movieDetailsVisibilityHandler,
  } = props;

  const hideDetails = () => {
    movieDetailsVisibilityHandler();
  };

  return (
    <>
      <div className={`movie-details ${visibility}`}>
        <div className="movie-details-hero">
          <SearchIconElement clickListener={hideDetails} />
        </div>
        <div className="movie-details-content">
          <img src={selectedMovie.poster_path} alt={selectedMovie.title} />
          <div className="details">
            <div className="title">
              {selectedMovie.title}
              <span className="rating">{selectedMovie.vote_average}</span>
            </div>
            <div className="tag">{selectedMovie.tagline}</div>
            <div className="year">
              {getYearFromReleaseDate(selectedMovie.release_date)}
              <span className="duration">
                {selectedMovie.runtime}
                {' '}
                min
              </span>
            </div>
            <div className="description">{selectedMovie.overview}</div>
          </div>
        </div>
      </div>
    </>
  );
}

movieDetails.propTypes = {
  selectedMovie: PropTypes.shape({
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    tagline: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  visibility: PropTypes.string,
  movieDetailsVisibilityHandler: PropTypes.func,
};

const mapStateToProps = (state) => ({
  visibility: state.movieDetails.visibility,
  selectedMovie: state.movieDetails.selectedMovie,
});

const mapDispatchToProps = { movieDetailsVisibilityHandler: () => ({ type: SHOW_MOVIE_DETAILS, payload: '' }) };
export default connect(mapStateToProps, mapDispatchToProps)(movieDetails);
