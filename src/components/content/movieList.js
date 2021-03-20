import React, { useMemo, useState } from 'react';
import { connect } from 'react-redux';
import { useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditForm from './editMovie/editForm';
import DeleteForm from './editMovie/deleteForm';
import NoMovie from '../common/noMovie';
import { searchMovies } from '../../redux/actions/actionCreators';

function movieList(props) {
  const {
    movies, pending, findMovies,
  } = props;
  const [visibleEditForm, setVisibleEditForm] = useState(false);
  const [visibleDeleteForm, setVisibleDeleteForm] = useState(false);
  const [prevSearch, setPrevSearch] = useState('');
  const editId = 'edit_movie';
  const deleteId = 'delete_movie';
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');

  if (searchParam && prevSearch !== searchParam) {
    setPrevSearch(searchParam);
    findMovies(searchParam);
  }
  const itemsBuilder = (item) => (
    <MovieItem
      key={item.id}
      movie={item}
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
        {(items.length && items) || (<NoMovie />)}
      </div>
      {
        visibleEditForm
        && (
          <EditForm
            id={editId}
            displayModal={setVisibleEditForm}
          />
        )
      }
      {
        visibleDeleteForm
        && (
          <DeleteForm
            id={deleteId}
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
};

movieList.defaultProps = {
  movies: [],
};

const mapStateToProps = (state) => (
  { movies: state.movie.movies, pending: state.movie.pending }
);

const mapDispatchToProps = { findMovies: searchMovies };
export default connect(mapStateToProps, mapDispatchToProps)(movieList);
