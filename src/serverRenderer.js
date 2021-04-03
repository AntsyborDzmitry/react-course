import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import configureStore from './redux/configureStore';
import App from './app';
import doAsyncStoreInitialization from './storeInitHelper';

function renderHTML(html, preloadedState) {
  return `
    <!doctype html>
    <html>
      <head>
        <meta charset=utf-8>
        <title>React Server Side Rendering</title>
        <link href="/main.css" rel="stylesheet" type="text/css">
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          // WARNING: See the following for security issues around embedding JSON in HTML:
          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        <script src="/js/main.js"></script>
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const promises = doAsyncStoreInitialization(req, store);

    Promise.all(promises).then(
      () => {
        const context = {};
        const renderRoot = () => (
          <App
            context={context}
            location={req.url}
            Router={StaticRouter}
            store={store}
          />
        );

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }

        const htmlString = renderToString(renderRoot());
        const preloadedState = store.getState();
        res.send(renderHTML(htmlString, preloadedState));
      },
    ).catch(e => (console.error(e)));  // eslint-disable-line
  };
}
