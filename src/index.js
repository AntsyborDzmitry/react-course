import React from 'react';
import { hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './app';

const preloadedState = window.PRELOADED_STATE;
const store = configureStore(preloadedState);

delete window.PRELOADED_STATE;

const app = (
  <App
    Router={BrowserRouter}
    store={store}
  />
);

hydrate(app, document.getElementById('root'));
