import { HOST, URL } from '../data/constant';

export function getYearFromReleaseDate(releaseDate) {
  return releaseDate?.length > 4 ? releaseDate.substr(0, 4) : releaseDate;
}

export function buildGetMovieListURL(filterKey = '', sortKey = '', getState) {
  let filter = filterKey;
  let sort = sortKey;

  if (!filterKey) {
    filter = getState().movie.filterBy;
  }
  filter = filter === 'all' ? '' : filter;

  if (!sortKey) {
    sort = getState().movie.sortBy || 'release_date';
  }
  const params = `?sortBy=${sort}&sortOrder=desc&searchBy=genres&filter=${filter}&limit=20`;
  return `${HOST}${URL}${params}`;
}

function parseNumberValueOrDefault(value, defaultValue) {
  const parsedValue = parseFloat(value, 10);
  return Number.isFinite(parsedValue) ? parsedValue : defaultValue;
}

export function getSerializedFormData(formData) {
  const serializedData = formData;
  serializedData.genres = [serializedData.genres];
  if (!serializedData.tagline) {
    serializedData.tagline = '-';
  }
  serializedData.runtime = parseNumberValueOrDefault(serializedData.runtime, 0);
  serializedData.vote_count = parseNumberValueOrDefault(serializedData.vote_count, 0);
  serializedData.vote_average = parseNumberValueOrDefault(serializedData.vote_average, 0);
  serializedData.budget = parseNumberValueOrDefault(serializedData.budget, 0);
  serializedData.revenue = parseNumberValueOrDefault(serializedData.revenue, 0);
  if (serializedData.id) {
    serializedData.id = parseNumberValueOrDefault(serializedData.id, '');
  }

  return serializedData;
}
