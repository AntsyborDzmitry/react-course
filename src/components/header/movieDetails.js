import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../common/logo';
import SearchIconElement from '../common/searchIconElement';
import { getYearFromReleaseDate } from '../../utils/utils';
import '../../styles/header/movieDetails.scss';
import '../../styles/common/searchIconElement.scss';

export default function movieDetails(props) {
  const {
    selectedMovie,
    visibilityState,
    movieDetailsVisibilityHandler,
  } = props;

  const hideDetails = () => {
    movieDetailsVisibilityHandler('');
  };
  return (
    <>
      <div className={`movie-details ${visibilityState}`}>
        <div className="movie-details-header">
          <Logo logoLink="my-test-site.com" />
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
  visibilityState: PropTypes.string,
  movieDetailsVisibilityHandler: PropTypes.func,
};
