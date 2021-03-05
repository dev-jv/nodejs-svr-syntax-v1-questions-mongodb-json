const express = require('express');

const app = express();

app.use( require('./questions') );

module.exports = app;
