import React from 'react';
import { useRouteMatch } from 'react-router';
import Content from '../layout/content';
import SearchResultNumber from './searchResultNumber';
import HeroComponent from '../hero/heroComponent';
import Navigation from '../navigation/navigation';
import NoMovie from '../common/noMovie';
import MovieList from './movieList';
import ErrorBoundary from '../../errorHandlers/errorBoundary';
import { BOUNDARY_ERROR_MESSAGE } from '../../data/constant';

export default function contentComponent() {
  const matchFilm = useRouteMatch({
    path: '/film/:id',
    strict: true,
    sensitive: true,
  });
  const matchSearch = useRouteMatch({
    path: '/search query',
    strict: true,
    sensitive: true,
  });
  const matchNoMovie = useRouteMatch({
    path: '/',
    strict: true,
    sensitive: true,
  });

  return (
    <ErrorBoundary errorMessage={BOUNDARY_ERROR_MESSAGE}>
      <HeroComponent />
      <Content>
        <Navigation />
        <SearchResultNumber />
        { matchNoMovie?.isExact && <NoMovie /> }
        { (matchSearch?.isExact || matchFilm?.isExact) && <MovieList /> }
      </Content>
    </ErrorBoundary>
  );
}
