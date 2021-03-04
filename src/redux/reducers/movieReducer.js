import { GET_MOVIE_LIST, SORT_MOVIE_BY } from '../actions/actionTypes';

const initialState = { movies: [] };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_MOVIE_LIST: return { movies: action.payload };
    case SORT_MOVIE_BY: return { movies: action.payload };

    default: return state;
  }
};

// const authReducer = (state = initialState, action) => {
//  switch (action.type) {
//    case SET_USER_DATA:
//      return {
//        ...state,
//        ...action.payload,
//      };
//
//    case SET_CAPTCHA_URL_SUCCESS:
//      return {
//        ...state,
//        captchaUrl: action.payload,
//      };
//
//    default:
//      return state;
//  }
// };
