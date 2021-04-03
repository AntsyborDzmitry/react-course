import * as actionType from '../actions/actionTypes';

const initialState = {
  movies: [], filterBy: '', sortBy: 'release_date', pending: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionType.GET_MOVIE_LIST: return {
      ...state,
      movies: action.payload.data,
    };
    case actionType.ADD_MOVIE: return {
      ...state,
      movies: action.payload,
    };
    case actionType.DELETE_MOVIE: return {
      ...state,
      movies: action.payload,
    };
    case actionType.EDIT_MOVIE: return {
      ...state,
      movies: action.payload,
    };
    case actionType.GET_MOVIE_LIST_PENDING: return {
      ...state,
      pending: action.payload,
    };
    case actionType.SORT_MOVIE_BY: return {
      ...state,
      movies: action.payload.data,
      sortBy: action.payload.sortKey,
    };
    case actionType.FILTER_MOVIE_BY: return {
      ...state,
      movies: action.payload.data,
      filterBy: action.payload.filterKey,
    };

    default: return state;
  }
};
