import { SHOW_MODAL, HIDE_MODAL } from '../actions/actionTypes';

const initialState = { visibilityState: 'display-none' };

const addMovieReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: return { visibilityState: 'display-block' };
    case HIDE_MODAL: return { visibilityState: 'display-none' };
    default: return state;
  }
};

export default addMovieReducer;
