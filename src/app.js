import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';
import React from 'react';

import ErrorBoundary from './errorHandlers/errorBoundary';
import Header from './components/layout/header';
import Search from './components/header/search';
import HeaderMenu from './components/header/headerMenu';
import Content from './components/layout/content';
import SearchResultNumber from './components/content/searchResultNumber';
import Navigation from './components/navigation/navigation';
import MovieList from './components/content/movieList';
import Footer from './components/layout/footer';
import Logo from './components/common/logo';
import { movies, searchResultNumber } from './data/mockData';

const errorMessage = 'Something went wrong.';

function App() {
  return (
    <>
      <ErrorBoundary errorMessage={errorMessage}>
        <Header>
          <HeaderMenu />
          <Search searchTitle="find your movie" searchPlaceholder="What do you want to watch?" />
        </Header>
      </ErrorBoundary>
      <ErrorBoundary errorMessage={errorMessage}>
        <Content>
          <Navigation />
          <SearchResultNumber resultNumber={searchResultNumber} title=" movies found" />
          <MovieList movies={movies} />
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
