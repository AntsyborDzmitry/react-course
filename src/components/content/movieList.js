import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditForm from './editMovie/editForm';
import DeleteForm from './editMovie/deleteForm';

export default function movieList(props) {
  const { movies } = props;
  const modalEditId = 'edit_movie_modal';
  const modalDeleteId = 'delete_movie_modal';

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
            >
              <EditMovie modalDeleteId={modalDeleteId} modalEditId={modalEditId} />
            </MovieItem>
          ))
        }
      </div>
      <EditForm modalId={modalEditId} />
      <DeleteForm modalId={modalDeleteId} />
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
