import React from 'react';
import PropTypes from 'prop-types';
import '../../styles/content/movieItem.scss';

export default function movieItem(props) {
  const {
    movie,
    selectedMovieHandler,
    movieDetailsVisibilityHandler,
    children,
  } = props;

  const setSelectedMovieAndShow = (e) => {
    selectedMovieHandler(movie);
    if (e.target?.classList.contains('movie__img')) {
      movieDetailsVisibilityHandler('movie-details-active');
    }
  };

  return (
    <div className="col-6 col-sm-4 col-md-3" onClick={setSelectedMovieAndShow}>
      {children}
      <img src={movie.imageLink} className="movie__img" alt={movie.title} />
      <div className="movie-info">
        <div className="main-info">
          <span className="title">{movie.title}</span>
          <span className="year">{movie.year}</span>
        </div>
        <div className="genre">{movie.genre}</div>
      </div>
    </div>
  );
}

movieItem.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    imageLink: PropTypes.string,
    year: PropTypes.string,
    duration: PropTypes.string,
    description: PropTypes.string,
    rating: PropTypes.string,
  }),
  selectedMovieHandler: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
