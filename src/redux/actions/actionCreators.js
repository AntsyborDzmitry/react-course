import { GET_MOVIE_LIST, SORT_MOVIE_BY } from './actionTypes';
import { compareValues } from '../../utils/utils';

function fetchMovieList() {
  // dispatch({ type: 'GET_MOVIE_LIST_PENDING', payload: data })
  return (dispatch) => fetch('http://localhost:4000/movies')
    .then((response) => response.json())
    .then(
      (data) => {
        dispatch({ type: GET_MOVIE_LIST, payload: data.data });
      },
    )
    .catch((error) => {
      console.error('Problem with getting movie data from server: ', error);
    });
}

function sortMovieListBy(movieList, key) {
  return (dispatch) => {
    let list = movieList || [];
    if (list?.length) {
      list = [...movieList];
      list.sort(compareValues(key));
    }
    return dispatch({ type: SORT_MOVIE_BY, payload: list });
  };
}

export { fetchMovieList, sortMovieListBy };
