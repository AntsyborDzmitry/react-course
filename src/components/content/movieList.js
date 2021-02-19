import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';

export default function movieList(props) {
  const { movies } = props;

  return (
    <div className="movie-list">
      <div className="row">
        {
          movies.map((item) => (
            <MovieItem
              key={item.title}
              title={item.title}
              link={item.link}
              year={item.year}
              genre={item.genre}
            />
          ))
        }
      </div>
    </div>
  );
}

movieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      year: PropTypes.string.isRequired,
      genre: PropTypes.string.isRequired,
    }),
  ),
};
