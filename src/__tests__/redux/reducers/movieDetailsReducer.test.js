import reducer from '../../../redux/reducers/movieDetailsReducer';
import { SHOW_MOVIE_DETAILS, SET_SELECTED_MOVIE } from '../../../redux/actions/actionTypes';

describe('Tests for movieDetailsReducer ', () => {
  it('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(
      {
        visibility: '',
        selectedMovie: {},
      },
    );
  });

  it('should return the updated state for visibility key', () => {
    const initialState = { visibility: '', selectedMovie: {} };
    const testAction = { type: SHOW_MOVIE_DETAILS, payload: 'movie-details-active' };

    expect(reducer(initialState, testAction)).toEqual(
      {
        selectedMovie: {},
        visibility: 'movie-details-active',
      },
    );
  });

  it('should return the updated state for selectedMovie key', () => {
    const initialState = { visibility: 'test', selectedMovie: {} };
    const testPayload = {
      id: '11111',
      title: 'test title',
      poster_path: 'images/image-1.png',
      release_date: '1991-02-07',
      genres: ['comedies'],
    };
    const testAction = { type: SET_SELECTED_MOVIE, payload: testPayload };

    expect(reducer(initialState, testAction)).toEqual(
      {
        selectedMovie: testPayload,
        visibility: 'test',
      },
    );
  });
});
