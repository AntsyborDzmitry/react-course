import { createStore } from 'redux';
import addMovieReducer from './reducers/addMovieReducer';

const store = createStore(addMovieReducer);

export default store;
