import * as utils from '../../../utils/utils';

describe('Testing of the utils functions', () => {
  it('Should return only year', () => {
    expect('1991').toBe(utils.getYearFromReleaseDate('1991-02-07'));
  });

  it('Build URL for default case', () => {
    const expected = 'http://localhost:4000/movies?sortBy=testSort&sortOrder=desc&searchBy=genres&filter=testFilter&limit=20';
    const getSateMock = jest.fn();
    getSateMock.mockReturnValueOnce({ movie: { filterBy: 'testFilter' } }).mockReturnValueOnce({ movie: { sortBy: 'testSort' } });
    expect(expected).toBe(utils.buildGetMovieListURL('', '', getSateMock));
  });

  it('Build URL for normal case', () => {
    const expected = 'http://localhost:4000/movies?sortBy=sortKey&sortOrder=desc&searchBy=genres&filter=filterKey&limit=20';
    const getSateMock = jest.fn();
    expect(expected).toBe(utils.buildGetMovieListURL('filterKey', 'sortKey', getSateMock));
  });

  it('should return value', () => {
    const formData = {
      budget: 0,
      genres: 'adventure',
      overview: 'test overview',
      poster_path: 'images/image-1.png',
      release_date: '2021-03-11',
      revenue: 0,
      runtime: '100',
      tagline: '',
      title: 'title',
      vote_average: 0,
      vote_count: 0,
    };
    const expected = {
      budget: 0,
      genres: ['adventure'],
      overview: 'test overview',
      poster_path: 'images/image-1.png',
      release_date: '2021-03-11',
      revenue: 0,
      runtime: 100,
      tagline: '-',
      title: 'title',
      vote_average: 0,
      vote_count: 0,
    };

    expect(expected).toStrictEqual(utils.getSerializedFormData(formData));
  });
});
