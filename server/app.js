const express = require('express');

const app = express();
global.fetch = require('node-fetch');
const serverRenderer = require('../dist/js/serverRenderer').default;

app.use(express.static('dist'));
app.use(serverRenderer());

module.exports = app;
