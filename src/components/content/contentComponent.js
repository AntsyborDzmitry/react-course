import React from 'react';
import Content from '../layout/content';
import SearchResultNumber from './searchResultNumber';
import HeroComponent from '../hero/heroComponent';
import Navigation from '../navigation/navigation';
import MovieList from './movieList';
import ErrorBoundary from '../../errorHandlers/errorBoundary';
import { BOUNDARY_ERROR_MESSAGE } from '../../data/constant';

export default function contentComponent() {
  return (
    <ErrorBoundary errorMessage={BOUNDARY_ERROR_MESSAGE}>
      <HeroComponent />
      <Content>
        <Navigation />
        <SearchResultNumber />
        <MovieList />
      </Content>
    </ErrorBoundary>
  );
}
