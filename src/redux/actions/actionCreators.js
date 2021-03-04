import { GET_MOVIE_LIST, SORT_MOVIE_BY, GET_MOVIE_LIST_PENDING } from './actionTypes';
import { compareValues, doApiCall } from '../../utils/utils';

function buildMovieList(filterKey = '', sortKey = 'release_date') {
  const host = 'http://localhost:4000';
  const url = '/movies';
  const params = `?sortBy=${sortKey}&sortOrder=desc&searchBy=genres&filter=${filterKey}&limit=20`;

  return (dispatch) => {
    dispatch({ type: GET_MOVIE_LIST_PENDING, payload: false });
    const response = doApiCall(`${host}${url}${params}`);
    response.then(
      (data) => {
        if (data?.data) {
          dispatch({ type: GET_MOVIE_LIST, payload: data.data });
        }
      },
    );
    dispatch({ type: GET_MOVIE_LIST_PENDING, payload: true });
  };
}

function sortMovieListBy(movieList, key) {
  return (dispatch) => {
    let list = movieList || [];
    if (list?.length) {
      list = [...movieList];
      list.sort(compareValues(key));
    }
    return dispatch({ type: SORT_MOVIE_BY, payload: key });
  };
}

export { buildMovieList, sortMovieListBy };
