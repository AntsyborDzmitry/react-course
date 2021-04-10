import React from 'react';
import {
  Route, Switch,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import PropTypes from 'prop-types';
import './styles/libs/bootstrap-grid.min.css';
import './styles/index.scss';
import HeaderAsync from './components/layout/headerAsync';
import FooterAsync from './components/layout/footerAsync';
import LogoAsync from './components/common/logoAsync';
import NoMatchAsync from './components/pages/errorAsync';
import ContentComponentAsync from './components/content/contentComponentAsync';

function App({
  Router, location, context, store,
}) {
  return (
    <Provider store={store}>
      <Router location={location} context={context}>
        <HeaderAsync>
          <LogoAsync logoLink="my-test-site.com" />
        </HeaderAsync>
        <Switch>
          <Route exact path={['/', '/search query/', '/film/:id']}>
            <ContentComponentAsync />
          </Route>
          <Route component={NoMatchAsync} />
        </Switch>
        <FooterAsync>
          <LogoAsync logoLink="my-test-site.com" />
        </FooterAsync>
      </Router>
    </Provider>
  );
}

export default App;

App.propTypes = {
  Router: PropTypes.func.isRequired,
  location: PropTypes.string,
  context: PropTypes.objectOf(PropTypes.object),
  store: PropTypes.shape({
    dispatch: PropTypes.func.isRequired,
  }),
};

App.defaultProps = {
  location: '',
  store: {},
  context: {},
};
