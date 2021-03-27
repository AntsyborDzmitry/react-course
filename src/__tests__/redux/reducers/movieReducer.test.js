import reducer from '../../../redux/reducers/movieReducer';
import * as actionTypes from '../../../redux/actions/actionTypes';
import * as mockData from '../../../data/mockData';

describe('Tests for movieReducer ', () => {
  const movies = [mockData.movies[0], mockData.movies[1]];
  const initialState = {
    movies: [], filterBy: '', sortBy: '', pending: false,
  };

  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  it('GET_MOVIE_LIST action should return the updated state', () => {
    const testAction = { type: actionTypes.GET_MOVIE_LIST, payload: { data: movies } };
    const expectedResult = {
      movies, filterBy: '', sortBy: '', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('SEARCH_MOVIES action should return the updated state', () => {
    const testAction = { type: actionTypes.SEARCH_MOVIES, payload: { data: movies } };
    const expectedResult = {
      movies, filterBy: '', sortBy: 'release_date', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('ADD_MOVIE action should return the updated state', () => {
    const testAction = { type: actionTypes.ADD_MOVIE, payload: movies[0] };
    const expectedResult = {
      movies: movies[0], filterBy: '', sortBy: '', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('DELETE_MOVIE action should return the updated state', () => {
    const testAction = { type: actionTypes.DELETE_MOVIE, payload: movies[0] };
    const expectedResult = {
      movies: movies[0], filterBy: '', sortBy: '', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('EDIT_MOVIE action should return the updated state', () => {
    const testAction = { type: actionTypes.EDIT_MOVIE, payload: movies[0] };
    const expectedResult = {
      movies: movies[0], filterBy: '', sortBy: '', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('GET_MOVIE_LIST_PENDING action should return the updated state ', () => {
    const testAction = { type: actionTypes.GET_MOVIE_LIST_PENDING, payload: true };
    const expectedResult = {
      movies: [], filterBy: '', sortBy: '', pending: true,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('SORT_MOVIE_BY action should return the updated state ', () => {
    const testAction = { type: actionTypes.SORT_MOVIE_BY, payload: { data: movies, sortKey: 'date' } };
    const expectedResult = {
      movies, filterBy: '', sortBy: 'date', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });

  it('FILTER_MOVIE_BY action should return the updated state ', () => {
    const testAction = { type: actionTypes.FILTER_MOVIE_BY, payload: { data: movies, filterKey: 'comedy' } };
    const expectedResult = {
      movies, filterBy: 'comedy', sortBy: '', pending: false,
    };
    expect(reducer(initialState, testAction)).toEqual(expectedResult);
  });
});
