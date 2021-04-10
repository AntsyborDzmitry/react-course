import * as actionType from './actionTypes';
import { buildGetMovieListURL, compareValues } from '../../utils/utils';
import { HOST, URL } from '../../data/constant';
import {
  doGetApiCall, doPostApiCall, doDeleteApiCall, doPutApiCall,
} from '../../services/apiCall';

function addMovie(data) {
  return (dispatch, getState) => {
    const response = doPostApiCall(`${HOST}${URL}`, data);
    response.then((res) => {
      if (res && res.ok) {
        return res.json();
      }
      return {};
    }).then((result) => {
      const moviesCopy = [...getState().movie.movies];
      moviesCopy.unshift(result);
      dispatch({ type: actionType.ADD_MOVIE, payload: moviesCopy });
    });
  };
}

function deleteMovie(movieId) {
  return (dispatch, getState) => {
    const response = doDeleteApiCall(`${HOST}${URL}/${movieId}`);
    response.then((res) => {
      if (res && res.ok) {
        const updatedMoviesCopy = getState().movie.movies.filter((el) => el.id !== movieId);
        dispatch({ type: actionType.DELETE_MOVIE, payload: updatedMoviesCopy });
      }
    });
  };
}

function replaceEditedMovie(movies, editedElement) {
  const items = movies || [];
  items.forEach((element, index) => {
    if (element.id === editedElement.id) {
      items[index] = editedElement;
    }
  });
  return items;
}

function editMovie(data) {
  return (dispatch, getState) => {
    const response = doPutApiCall(`${HOST}${URL}`, data);
    response.then((res) => {
      if (res && res.ok) {
        const moviesCopy = [...getState().movie.movies];
        const editedMoviesCopy = replaceEditedMovie(moviesCopy, data);
        dispatch({ type: actionType.EDIT_MOVIE, payload: editedMoviesCopy });
      }
    });
  };
}

function loadMovieList(filterKey, sortKey, action = actionType.GET_MOVIE_LIST) {
  return (dispatch, getState) => {
    const url = buildGetMovieListURL(filterKey, sortKey, getState);
    dispatch({ type: actionType.GET_MOVIE_LIST_PENDING, payload: false });
    const response = doGetApiCall(url);
    response.then(
      (data) => {
        if (data?.data) {
          dispatch(
            {
              type: action,
              payload: { data: data.data, filterKey, sortKey },
            },
          );
        }
        dispatch({ type: actionType.GET_MOVIE_LIST_PENDING, payload: false });
      },
    );
  };
}

function searchMovies(searchKey, action = actionType.SEARCH_MOVIES) {
  const url = `${HOST}${URL}?search=${searchKey}&searchBy=title`;
  return (dispatch) => {
    dispatch({ type: actionType.GET_MOVIE_LIST_PENDING, payload: false });
    const response = doGetApiCall(url);
    response.then(
      (data) => {
        if (data?.data) {
          dispatch(
            {
              type: action,
              payload: { data: data.data },
            },
          );
        }
        dispatch({ type: actionType.GET_MOVIE_LIST_PENDING, payload: false });
      },
    );
  };
}

function sortMovieListBy(movieList, key) {
  return (dispatch) => {
    let list = movieList || [];
    if (list?.length) {
      list = [...movieList];
      list.sort(compareValues(key));
    }
    return dispatch({ type: actionType.SORT_MOVIE_BY, payload: key });
  };
}

export {
  loadMovieList, searchMovies, addMovie, deleteMovie, editMovie, sortMovieListBy,
};
