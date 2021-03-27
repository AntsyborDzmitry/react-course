import { waitFor } from '@testing-library/react';
import * as apiCall from '../../../services/apiCall';
import * as mockData from '../../../data/mockData';
import * as actionCreators from '../../../redux/actions/actionCreators';

describe('test actionCreators functions', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  const apiResponseMockData = { data: [{ movie: '123' }, { movie: '1111' }] };

  const mockGet = jest.spyOn(apiCall, 'doGetApiCall');
  mockGet.mockResolvedValue(apiResponseMockData);

  const movies = [mockData.movies[0], mockData.movies[1]];
  const store = {
    getState: jest.fn(() => ({ movie: { filterBy: 'testFilter', movies } })),
    dispatch: jest.fn(),
  };

  it('loadMovieList should return correct payload and types', async () => {
    const expectedActions = [
      [{ payload: false, type: 'GET_MOVIE_LIST_PENDING' }],
      [{ payload: { data: [{ movie: '123' }, { movie: '1111' }], filterKey: '', sortKey: '' }, type: 'GET_MOVIE_LIST' }],
      [{ payload: false, type: 'GET_MOVIE_LIST_PENDING' }],
    ];

    actionCreators.loadMovieList('', '')(store.dispatch, store.getState);
    await waitFor(() => {
      expect(mockGet).toBeCalledTimes(1);
      expect(store.dispatch).toBeCalledTimes(3);
      expect(store.dispatch.mock.calls).toEqual(expectedActions);
    });
  });

  it('searchMovies should return correct payload and types', async () => {
    const expectedActions = [
      [{ payload: false, type: 'GET_MOVIE_LIST_PENDING' }],
      [{ payload: { data: [{ movie: '123' }, { movie: '1111' }] }, type: 'SEARCH_MOVIES' }],
      [{ payload: false, type: 'GET_MOVIE_LIST_PENDING' }],
    ];
    actionCreators.searchMovies('')(store.dispatch, store.getState);
    await waitFor(() => {
      expect(mockGet).toBeCalledTimes(1);
      expect(store.dispatch).toBeCalledTimes(3);
      expect(store.dispatch.mock.calls).toEqual(expectedActions);
    });
  });

  it('editMovie should return correct payload and types', async () => {
    const updatedMovie = {
      id: 111111,
      title: 'updated title',
      tagline: 'updated tag line',
      vote_average: 1,
      vote_count: 1,
      release_date: '2000-02-07',
      poster_path: 'images/image-2.png',
      overview: 'updated description',
      genres: ['adventure'],
      budget: 55,
      revenue: 1,
      runtime: 1,
    };
    const expectedResult = [updatedMovie, movies[1]];
    const expectedActions = [[{ payload: expectedResult, type: 'EDIT_MOVIE' }]];
    const mockPut = jest.spyOn(apiCall, 'doPutApiCall');
    mockPut.mockResolvedValue({ ok: true });
    actionCreators.editMovie(updatedMovie)(store.dispatch, store.getState);
    await waitFor(() => {
      expect(mockPut).toBeCalledTimes(1);
      expect(store.dispatch).toBeCalledTimes(1);
      expect(store.dispatch.mock.calls).toEqual(expectedActions);
    });
  });

  it('deleteMovie should return correct payload and types', async () => {
    const expectedResult = [movies[1]];
    const expectedActions = [[{ payload: expectedResult, type: 'DELETE_MOVIE' }]];
    const mockDelete = jest.spyOn(apiCall, 'doDeleteApiCall');
    mockDelete.mockResolvedValue({ ok: true });
    actionCreators.deleteMovie(111111)(store.dispatch, store.getState);
    await waitFor(() => {
      expect(mockDelete).toBeCalledTimes(1);
      expect(store.dispatch).toBeCalledTimes(1);
      expect(store.dispatch.mock.calls).toEqual(expectedActions);
    });
  });

  it('addMovie should return correct payload and types', async () => {
    const newMovie = {
      id: 3333333,
      title: 'added title',
      tagline: 'added tag line',
      vote_average: 1,
      vote_count: 1,
      release_date: '2020-02-07',
      poster_path: 'images/image-2.png',
      overview: 'added description',
      genres: ['adventure'],
      budget: 5,
      revenue: 111,
      runtime: 11,
    };
    const expectedResult = [newMovie, movies[0], movies[1]];
    const expectedActions = [[{ payload: expectedResult, type: 'ADD_MOVIE' }]];
    const mockAdd = jest.spyOn(apiCall, 'doPostApiCall');
    mockAdd.mockResolvedValue({ ok: true, json: () => (newMovie) });
    actionCreators.addMovie(newMovie)(store.dispatch, store.getState);
    await waitFor(() => {
      expect(mockAdd).toBeCalledTimes(1);
      expect(store.dispatch).toBeCalledTimes(1);
      expect(store.dispatch.mock.calls).toEqual(expectedActions);
    });
  });
});
