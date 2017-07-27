'use strict';

var winston = require('winston');
var config = require('config');
var pathDir = require('../../../project-path');

winston.addColors({
  error: 'red',
  warn: 'yellow',
  info: 'cyan',
  verbose: 'grey',
  debug: 'blue',
  silly: 'magenta'
});

var logger = new (winston.Logger)({
  transports: [
    new (winston.transports.Console)(config.get('winston.console')),
    new winston.transports.File({
      name: 'info-file',
      filename: pathDir.rootDir + 'debug/info.log',
      json: false,
      level: 'info'
    }),
    new winston.transports.File({
      name: 'error-file',
      filename: pathDir.rootDir + 'debug/error.log',
      json: false,
      level: 'error'
    })
  ],
  exceptionHandlers: [
    new (winston.transports.Console)(config.get('winston.console')),
    new winston.transports.File({
      filename: pathDir.rootDir + 'debug/exceptions.log',
      json: false
    })
  ],
  exitOnError: false
});

module.exports = logger;
