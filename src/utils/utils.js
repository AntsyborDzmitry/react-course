function getYearFromReleaseDate(releaseDate) {
  return releaseDate?.length > 4 ? releaseDate.substr(0, 4) : releaseDate;
}

function compareValues(key, order = 'asc') {
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

function doApiCall(url) {
  return fetch(url)
    .then(
      (response) => response.json(),
    ).catch((error) => {
      console.error('Problem with getting data from server: ', error);
    });
}

export { getYearFromReleaseDate, compareValues, doApiCall };
