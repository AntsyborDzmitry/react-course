import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import MovieReducer from './reducers/movieReducer';

const store = createStore(MovieReducer, applyMiddleware(thunk));

export default store;
