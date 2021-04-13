import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import SearchIconElement from '../common/searchIconElement';
import { getYearFromReleaseDate } from '../../utils/utils';
import { SHOW_MOVIE_DETAILS } from '../../redux/actions/actionTypes';
import '../../styles/hero/movieDetails.scss';
import '../../styles/common/searchIconElement.scss';

export default function movieDetails() {
  const dispatch = useDispatch();
  const visibility = useSelector((state) => state.movieDetails.visibility);
  const selectedMovie = useSelector((state) => state.movieDetails.selectedMovie);

  const hideDetails = () => {
    dispatch({ type: SHOW_MOVIE_DETAILS, payload: '' });
  };

  return (
    <>
      <div className={`movie-details ${visibility}`}>
        <div className="movie-details-hero">
          <SearchIconElement clickListener={hideDetails} />
        </div>
        <div className="movie-details-content">
          <img src={selectedMovie.poster_path} width="200px" height="298px" alt={selectedMovie.title} />
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
