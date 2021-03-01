import React from 'react';
import PropTypes from 'prop-types';
import Logo from '../common/logo';
import SearchIconElement from '../common/searchIconElement';
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
          <img src={selectedMovie.imageLink} alt={selectedMovie.title} />
          <div className="details">
            <div className="title">
              {selectedMovie.title}
              <span className="rating">{selectedMovie.rating}</span>
            </div>
            <div className="year">
              {selectedMovie.year}
              <span className="duration">
                {selectedMovie.duration}
                {' '}
                min
              </span>
            </div>
            <div className="description">{selectedMovie.description}</div>
          </div>
        </div>
      </div>
    </>
  );
}

movieDetails.propTypes = {
  selectedMovie: PropTypes.shape({
    title: PropTypes.string,
    imageLink: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
  }),
  visibilityState: PropTypes.string,
  movieDetailsVisibilityHandler: PropTypes.func,
};
