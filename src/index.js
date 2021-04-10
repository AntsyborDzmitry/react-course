import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import configureStore from './redux/configureStore';
import AppAsync from './appAsync';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

delete window.PRELOADED_STATE;

const app = (
  <AppAsync
    Router={BrowserRouter}
    store={store}
  />
);

window.onload = () => {
  Loadable.preloadReady().then(() => {
    hydrate(app, document.getElementById('root'));
  });
};
