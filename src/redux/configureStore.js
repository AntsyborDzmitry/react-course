import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import movieReducer from './reducers/movieReducer';
import movieDetailsReducer from './reducers/movieDetailsReducer';

const reducers = combineReducers({
  movie: movieReducer,
  movieDetails: movieDetailsReducer,
});

export default (initialState) => {
  const store = createStore(reducers, initialState, applyMiddleware(thunk));
  return store;
};
