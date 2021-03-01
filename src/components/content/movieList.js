import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditForm from './editMovie/editForm';
import DeleteForm from './editMovie/deleteForm';

export default function movieList(props) {
  const { movies, selectedMovieHandler, movieDetailsVisibilityHandler } = props;
  const modalEditId = 'edit_movie_modal';
  const modalDeleteId = 'delete_movie_modal';

  const itemsBuilder = (item) => (
    <MovieItem
      key={item.title}
      movie={item}
      selectedMovieHandler={selectedMovieHandler}
      movieDetailsVisibilityHandler={movieDetailsVisibilityHandler}
    >
      <EditMovie modalDeleteId={modalDeleteId} modalEditId={modalEditId} />
    </MovieItem>
  );

  const items = useMemo(() => movies.map(itemsBuilder), [movies]);

  return (
    <div className="movie-list">
      <div className="row">
        {items}
      </div>
      <EditForm modalId={modalEditId} />
      <DeleteForm modalId={modalDeleteId} />
    </div>
  );
}

movieList.propTypes = {
  selectedMovieHandler: PropTypes.func,
  movieDetailsVisibilityHandler: PropTypes.func,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      imageLink: PropTypes.string,
      year: PropTypes.string,
      duration: PropTypes.string,
      description: PropTypes.string,
      rating: PropTypes.string,
    }),
  ),
};
