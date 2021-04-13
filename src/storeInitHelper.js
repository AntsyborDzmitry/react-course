import MovieList from './components/content/movieList';

export default (req, store) => {
  const queryString = req.url.replace('/search%20query', '');
  const searchParam = new URLSearchParams(queryString).get('search');
  const promises = [];
  if (searchParam) {
    promises.push(Promise.resolve(store.dispatch(MovieList.ssrInit(searchParam))));
  }
  return promises;
};
