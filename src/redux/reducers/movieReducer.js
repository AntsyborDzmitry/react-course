import {
  GET_MOVIE_LIST, SORT_MOVIE_BY, FILTER_MOVIE_BY, GET_MOVIE_LIST_PENDING,
} from '../actions/actionTypes';

const initialState = { movies: [], filter: '', sortBy: 'release_date' };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST: return {
      movies: action.payload,
    };
    case GET_MOVIE_LIST_PENDING: return {
      movies: state.movies,
      pending: action.payload,
    };
    case SORT_MOVIE_BY: return {
      movies: state.movies,
      sortBy: action.payload,
    };
    case FILTER_MOVIE_BY: return {
      movies: state.movies,
      filterBy: action.payload,
    };

    default: return state;
  }
};
