import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Loadable from 'react-loadable';
import { getBundles } from 'react-loadable-ssr-addon';
import configureStore from './redux/configureStore';
import App from './app';
import doAsyncStoreInitialization from './storeInitHelper';

const manifest = require('../dist/react-loadable-ssr-addon.json');

function renderHTML(html, preloadedState, bundles) {
  const styles = bundles.css || [];
  const scripts = bundles.js || [];

  return `
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset=utf-8>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="Description" content="React training page.">
        <title>React Server Side Rendering</title>
        <link rel="preload" as="image" href="/images/hero-bg.jpg">
        ${styles.map((style) => (`<link href="/${style.file}" rel="stylesheet" />`)).join('\n')}
      </head>
      <body>
        <div id="root">${html}</div>
        <script>
          window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
        </script>
        ${scripts.map((script) => (`<script src="/${script.file}"></script>`)).join('\n')}
      </body>
    </html>
  `;
}

export default function serverRenderer() {
  return (req, res) => {
    const store = configureStore();
    const promises = doAsyncStoreInitialization(req, store);
    const modules = new Set();
    Promise.all(promises).then(
      () => {
        const context = {};
        const renderRoot = () => (
          <Loadable.Capture report={(moduleName) => modules.add(moduleName)}>
            <App
              context={context}
              location={req.url}
              Router={StaticRouter}
              store={store}
            />
          </Loadable.Capture>
        );

        if (context.url) {
          res.writeHead(302, {
            Location: context.url,
          });
          res.end();
          return;
        }
        const bundles = getBundles(manifest, [...manifest.entrypoints, ...Array.from(modules)]);

        const htmlString = renderToString(renderRoot());
        const preloadedState = store.getState();
        res.send(renderHTML(htmlString, preloadedState, bundles));
      },
    ).catch(e => (console.error(e)));  // eslint-disable-line
  };
}
