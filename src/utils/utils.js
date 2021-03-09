import { HOST, URL } from '../data/constant';

export function getYearFromReleaseDate(releaseDate) {
  return releaseDate?.length > 4 ? releaseDate.substr(0, 4) : releaseDate;
}

export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!Object.prototype.hasOwnProperty.call(a, key)
     || !Object.prototype.hasOwnProperty.call(b, key)) {
      return 0;
    }

    const varA = (typeof a[key] === 'string')
      ? a[key].toUpperCase() : a[key];
    const varB = (typeof b[key] === 'string')
      ? b[key].toUpperCase() : b[key];

    let comparison = 0;
    if (varA > varB) {
      comparison = 1;
    } else if (varA < varB) {
      comparison = -1;
    }
    return (
      (order === 'desc') ? (comparison * -1) : comparison
    );
  };
}

export function buildGetMovieListURL(filterKey = '', sortKey = 'release_date') {
  const params = `?sortBy=${sortKey}&sortOrder=desc&searchBy=genres&filter=${filterKey}&limit=20`;
  return `${HOST}${URL}${params}`;
}

function parseNumberValueOrDefault(value, defaultValue) {
  const parsedValue = parseFloat(value, 10);
  return Number.isFinite(parsedValue) ? parsedValue : defaultValue;
}

export function getSerializedFormData(formData) {
  const serializedData = Object.fromEntries(formData.entries());
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
