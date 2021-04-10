import React from 'react';
import {
  BrowserRouter as Router, Route, Switch,
} from 'react-router-dom';
import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';
import Header from './components/layout/header';
import ContentComponent from './components/content/contentComponent';
import Footer from './components/layout/footer';
import Logo from './components/common/logo';
import NoMatch from './components/pages/error';

function App() {
  return (
    <>
      <Router>
        <Header>
          <Logo logoLink="my-test-site.com" />
        </Header>
        <Switch>
          <Route exact path={['/', '/search query/', '/film/:id']}>
            <ContentComponent />
          </Route>
          <Route component={NoMatch} />
        </Switch>
        <Footer>
          <Logo logoLink="my-test-site.com" />
        </Footer>
      </Router>
    </>
  );
}

export default App;
