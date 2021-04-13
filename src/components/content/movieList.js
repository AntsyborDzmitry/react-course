import React, { useMemo, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import MovieItem from './movieItem';
import EditMovie from './editMovie/editMovie';
import EditFormAsync from './editMovie/editFormAsync';
import DeleteFormAsync from './editMovie/deleteFormAsync';
import NoMovie from '../common/noMovie';
import { searchMovies } from '../../redux/actions/actionCreators';

export default function movieList() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movie.movies);
  const pending = useSelector((state) => state.movie.pending);
  const [visibleEditForm, setVisibleEditForm] = useState(false);
  const [visibleDeleteForm, setVisibleDeleteForm] = useState(false);
  const [prevSearch, setPrevSearch] = useState('');
  const editId = 'edit_movie';
  const deleteId = 'delete_movie';
  const location = useLocation();
  const searchParam = new URLSearchParams(location.search).get('search');

  if (searchParam && prevSearch !== searchParam) {
    setPrevSearch(searchParam);
    dispatch(searchMovies(searchParam));
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
          <EditFormAsync
            id={editId}
            displayModal={setVisibleEditForm}
          />
        )
      }
      {
        visibleDeleteForm
        && (
          <DeleteFormAsync
            id={deleteId}
            displayModal={setVisibleDeleteForm}
          />
        )
      }
    </div>
  );
}

movieList.ssrInit = (searchParam) => {
  if (searchParam) {
    return searchMovies(searchParam);
  }
  return {};
};
