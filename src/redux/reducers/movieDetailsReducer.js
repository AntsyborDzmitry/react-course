import * as actionType from '../actions/actionTypes';

const initialState = {
  visibility: '', selectedMovie: {},
};

export default (action, state = initialState) => {
  switch (action.type) {
    case actionType.SHOW_MOVIE_DETAILS: return {
      ...state,
      visibility: action.payload,
    };
    case actionType.SET_SELECTED_MOVIE: return {
      ...state,
      selectedMovie: action.payload,
    };
    default: return state;
  }
};
