import React from 'react';
import PropTypes from 'prop-types';
import { getYearFromReleaseDate } from '../../utils/utils';
import '../../styles/content/movieItem.scss';

export default function movieItem(props) {
  const {
    movie, setSelectedMovie, movieDetailsVisibilityHandler, children,
  } = props;

  const setSelectedMovieAndShow = (e) => {
    setSelectedMovie(movie);
    if (e.target?.classList.contains('movie__img')) {
      movieDetailsVisibilityHandler('movie-details-active');
    }
  };

  return (
    <div className="col-6 col-sm-4 col-md-3" onClick={setSelectedMovieAndShow}>
      {children}
      <img src={movie.poster_path} className="movie__img" alt={movie.title} />
      <div id={movie.id} className="movie-info">
        <div className="main-info">
          <span className="title">{movie.title}</span>
          <span className="year">{getYearFromReleaseDate(movie.release_date)}</span>
        </div>
        <div className="genre">{movie.genres?.join(', ')}</div>
      </div>
    </div>
  );
}

movieItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
  movieDetailsVisibilityHandler: PropTypes.func,
  setSelectedMovie: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
