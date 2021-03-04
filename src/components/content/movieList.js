import React, { useMemo, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditForm from './editMovie/editForm';
import DeleteForm from './editMovie/deleteForm';
import { buildMovieList } from '../../redux/actions/actionCreators';

function movieList(props) {
  const {
    movies,
    selectedMovieHandler,
    movieDetailsVisibilityHandler,
    setMovieList,
  } = props;

  const modalEditId = 'edit_movie_modal';
  const modalDeleteId = 'delete_movie_modal';
  useEffect(() => { setMovieList(); }, []);

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
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      release_date: PropTypes.string,
      tagline: PropTypes.string,
      runtime: PropTypes.number,
      overview: PropTypes.string,
      vote_average: PropTypes.number,
    }),
  ),
  selectedMovieHandler: PropTypes.func,
  movieDetailsVisibilityHandler: PropTypes.func,
  setMovieList: PropTypes.func,
};

const mapStateToProps = (state) => { console.log('state from movieList ', state, Date.now()); return { movies: state.movies }; };
const mapDispatchToProps = { setMovieList: buildMovieList };

export default connect(mapStateToProps, mapDispatchToProps)(movieList);
