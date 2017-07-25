'use strict';

/**
 * Application module
 * @module app/app
 */
console.log('::::::::::::::::::::::::::::');
console.log('::       movieFreak       ::');
console.log(':: Created by Ray Andrew  ::');
console.log('::            Adrian HP   ::');
console.log('::::::::::::::::::::::::::::');
console.log(':: movieFreak initialized ::');
console.log('::::::::::::::::::::::::::::');

/**
 * Load dependencies
 */
const express = require('express');
const config = require('config');
const path = require('path');
const fs = require('fs-readdir-recursive');
const bluebird = require('bluebird');

/**
 * Creating apps
 */
var app = express();
global.appDir = path.resolve(__dirname);

/**
 * Creating logger
 */
const winston = require('./components/winston');

/**
 * Setting up the webpack middleware
 */
const webpack = require('webpack');
const webpackConfig = require('../webpack.config');
const compiler = webpack(webpackConfig);
app.use(require('webpack-dev-middleware')(compiler, {
  hot: true,
  noInfo: true,
  publicPath: webpackConfig.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler, {
  path: '/__assets_store'
}));

/**
 * Set up middleware
 */
winston.log('verbose', 'Setting up express middleware...');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(methodOverride('_method'));

/**
 * Setting up Mongoose connection to MongoDB
 */
winston.log('verbose', 'Opening connection to MongoDB...');
const mongoose = require('mongoose');

mongoose.Promise = bluebird.Promise;
mongoose.connect(config.get('mongodb')['url'], { useMongoClient: true }).then(
  () => {
    winston.verbose('Connect successfully with MongoDB');
  },
  (err) => {
    winston.error(err);
  }
);

/**
 * Load and applying routes
 */
/* app.get('/', (req, res) => {
    res.render('index');
}); */

const routeDirectory = global.appDir;
fs(routeDirectory).filter(file => file.endsWith('.routes.js')).forEach((file) => {
  const routerPath = path.join(routeDirectory, file);
  const router = require(routerPath);
  if (!router.baseRoute) router.baseRoute = '/';
  const completeRoute = config.get('routePrefix') + router.baseRoute;
  let filePath = file.substring(file.indexOf('/') + 1);
  let fileName = filePath.slice(0, -10);
  winston.log('verbose', 'Using route %s...', completeRoute + fileName);
  app.use('/api' + completeRoute + fileName, router);
});

/**
 * Setting the public file
 */
app.use(express.static(path.join(__dirname, 'public')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

/**
 * Setting up error handler middleware
 */
winston.verbose('Setting up error handler middleware');
const errorHandler = require('api-error-handler');
app.use(errorHandler());

module.exports = app;
