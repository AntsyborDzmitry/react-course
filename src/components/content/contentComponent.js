import React from 'react';
import ErrorBoundary from '../../errorHandlers/errorBoundary';
import { BOUNDARY_ERROR_MESSAGE } from '../../data/constant';
import ContentAsync from '../layout/contentAsync';
import SearchResultNumberAsync from './searchResultNumberAsync';
import HeroComponentAsync from '../hero/heroComponentAsync';
import NavigationAsync from '../navigation/navigationAsync';
import MovieListAsync from './movieListAsync';

export default function contentComponent() {
  return (
    <ErrorBoundary errorMessage={BOUNDARY_ERROR_MESSAGE}>
      <HeroComponentAsync />
      <ContentAsync>
        <NavigationAsync />
        <SearchResultNumberAsync />
        <MovieListAsync />
      </ContentAsync>
    </ErrorBoundary>
  );
}
