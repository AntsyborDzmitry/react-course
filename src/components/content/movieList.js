import React, { useMemo, useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditForm from './editMovie/editForm';
import DeleteForm from './editMovie/deleteForm';
import { loadMovieList } from '../../redux/actions/actionCreators';

function movieList(props) {
  const {
    movies, setSelectedMovie, selectedMovie, movieDetailsVisibilityHandler, setMovieList, pending,
  } = props;
  const [visibleEditForm, setVisibleEditForm] = useState(false);
  const [visibleDeleteForm, setVisibleDeleteForm] = useState(false);
  const editId = 'edit_movie';
  const deleteId = 'delete_movie';

  useEffect(() => {
    setMovieList();
  }, []);

  const itemsBuilder = (item) => (
    <MovieItem
      key={item.id}
      movie={item}
      setSelectedMovie={setSelectedMovie}
      movieDetailsVisibilityHandler={movieDetailsVisibilityHandler}
    >
      <EditMovie
        setVisibleEditForm={setVisibleEditForm}
        setVisibleDeleteForm={setVisibleDeleteForm}
      />
    </MovieItem>
  );

  const items = useMemo(() => movies.map(itemsBuilder), [movies]);

  return (
    <div className="movie-list">
      {pending && <div className="loader" />}
      <div className="row">
        {items}
      </div>
      {
        visibleEditForm
        && (
          <EditForm
            id={editId}
            selectedMovie={selectedMovie}
            displayModal={setVisibleEditForm}
          />
        )
      }
      {
        visibleDeleteForm
        && (
          <DeleteForm
            id={deleteId}
            selectedMovie={selectedMovie}
            displayModal={setVisibleDeleteForm}
          />
        )
      }
    </div>
  );
}

movieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      tagline: PropTypes.string,
      runtime: PropTypes.number,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
  setSelectedMovie: PropTypes.func,
  selectedMovie: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    poster_path: PropTypes.string,
    release_date: PropTypes.string,
    tagline: PropTypes.string,
    runtime: PropTypes.number,
    overview: PropTypes.string,
    vote_average: PropTypes.number,
  }),
  movieDetailsVisibilityHandler: PropTypes.func,
  setMovieList: PropTypes.func,
};

const mapStateToProps = (state) => (
  { movies: state.movies, pending: state.pending }
);

const mapDispatchToProps = { setMovieList: loadMovieList };
export default connect(mapStateToProps, mapDispatchToProps)(movieList);
