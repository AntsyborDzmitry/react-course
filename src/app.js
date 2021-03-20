import React, { useState } from 'react';
import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';

import ErrorBoundary from './errorHandlers/errorBoundary';
import Header from './components/layout/header';
import HeaderContent from './components/header/headerContent';
import MovieDetails from './components/header/movieDetails';
import Content from './components/layout/content';
import SearchResultNumber from './components/content/searchResultNumber';
import Navigation from './components/navigation/navigation';
import MovieList from './components/content/movieList';
import Footer from './components/layout/footer';
import Logo from './components/common/logo';
import { movies, searchResultNumber } from './data/mockData';

function App() {
  const errorMessage = 'Something went wrong.';
  const [selectedMovie, setSelectedMovie] = useState({});
  const [movieDetailsVisibility, setMovieDetailsVisibility] = useState('');

  return (
    <>
      <ErrorBoundary errorMessage={errorMessage}>
        <Header>
          <HeaderContent movieDetailsVisibility={movieDetailsVisibility} />
          <MovieDetails
            selectedMovie={selectedMovie}
            visibilityState={movieDetailsVisibility}
            movieDetailsVisibilityHandler={setMovieDetailsVisibility}
          />
        </Header>
      </ErrorBoundary>
      <ErrorBoundary errorMessage={errorMessage}>
        <Content>
          <Navigation />
          <SearchResultNumber resultNumber={searchResultNumber} />
          <MovieList
            movies={movies}
            selectedMovieHandler={setSelectedMovie}
            movieDetailsVisibilityHandler={setMovieDetailsVisibility}
          />
        </Content>
      </ErrorBoundary>
      <ErrorBoundary errorMessage={errorMessage}>
        <Footer>
          <Logo logoLink="my-test-site.com" />
        </Footer>
      </ErrorBoundary>
    </>
  );
}

export default App;
