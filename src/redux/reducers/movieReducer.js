import * as actionType from '../actions/actionTypes';

const initialState = {
  movies: [], filterBy: '', sortBy: 'release_date', needReloadMovies: true, pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIE_LIST: return {
      ...state,
      movies: action.payload.data,
      needReloadMovies: false,
    };
    case actionType.ADD_MOVIE: return {
      ...state,
      movies: action.payload,
    };
    case actionType.DELETE_MOVIE: return {
      ...state,
      movies: action.payload,
      needReloadMovies: false,
    };
    case actionType.EDIT_MOVIE: return {
      ...state,
      movies: action.payload,
      needReloadMovies: false,
    };
    case actionType.GET_MOVIE_LIST_PENDING: return {
      ...state,
      needReloadMovies: action.payload,
      pending: action.payload,
    };
    case actionType.SORT_MOVIE_BY: return {
      ...state,
      movies: action.payload.data,
      sortBy: action.payload.sortKey,
      needReloadMovies: false,
    };
    case actionType.FILTER_MOVIE_BY: return {
      ...state,
      movies: action.payload.data,
      filterBy: action.payload.filterKey,
      needReloadMovies: false,
    };

    default: return state;
  }
};
