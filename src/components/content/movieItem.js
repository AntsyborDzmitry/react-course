import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getYearFromReleaseDate } from '../../utils/utils';
import { SHOW_MOVIE_DETAILS, SET_SELECTED_MOVIE } from '../../redux/actions/actionTypes';
import '../../styles/content/movieItem.scss';

export default function movieItem(props) {
  const { movie, children } = props;
  const dispatch = useDispatch();
  const history = useHistory();

  const setSelectedMovieAndShow = (e) => {
    dispatch({ type: SET_SELECTED_MOVIE, payload: movie });
    if (e.target?.classList.contains('movie__img')) {
      dispatch({ type: SHOW_MOVIE_DETAILS, payload: 'movie-details-active' });
    }
    history.push(`/film/${movie.id}`);
  };

  return (
    <div className="col-6 col-sm-4 col-md-3" onClick={setSelectedMovieAndShow}>
      {children}
      <img src={movie.poster_path} className="movie__img" width="315px" height="470px" alt={movie.title} />
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
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
