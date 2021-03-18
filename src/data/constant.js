export const SORT_OPTIONS = [
  { key: 'release_date', value: 'year' },
  { key: 'genres', value: 'genre' },
  { key: 'vote_average', value: 'rating' },
];

export const GENRE_OPTIONS = [
  { key: 'action', value: 'Action' },
  { key: 'adventure', value: 'Adventure' },
  { key: 'animation', value: 'Animation' },
  { key: 'comedy', value: 'Comedy' },
  { key: 'drama', value: 'Drama' },
  { key: 'family', value: 'Family' },
  { key: 'fantasy', value: 'Fantasy' },
  { key: 'romance', value: 'Romance' },
];

export const CATEGORIES = [
  { key: '', value: 'all' },
  { key: 'documentary', value: 'documentary' },
  { key: 'comedy', value: 'comedy' },
  { key: 'horror', value: 'horror' },
  { key: 'crime', value: 'crime' },
];

export const HOST = 'http://localhost:4000';
export const URL = '/movies';
export const BOUNDARY_ERROR_MESSAGE = 'Something went wrong.';
export const SEND_ERROR_MESSAGE = 'Problem with sending data to server: ';
export const GET_ERROR_MESSAGE = 'Problem with getting data from server: ';
