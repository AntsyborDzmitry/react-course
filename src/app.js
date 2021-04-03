import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';
import Header from './components/layout/header';
import ContentComponent from './components/content/contentComponent';
import Footer from './components/layout/footer';
import Logo from './components/common/logo';
import NoMatch from './components/pages/error';

function App({
  Router, location, context, store,
}) {
  return (
    <Provider store={store}>
      <Router location={location} context={context}>
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
    </Provider>
  );
}

export default App;

App.propTypes = {
  Router: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  location: PropTypes.string,
  context: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
  store: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

App.defaultProps = {
  location: '',
  store: {},
  context: {},
};
