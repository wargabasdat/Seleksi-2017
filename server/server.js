var pathDir = require('../project-path');
var app = require(pathDir.serverAppDir + 'app.js');
var config = require('config');
var http = require('http');
var winston = require(pathDir.serverAppDir + '/components/winston.js');

/**
 * Get port from environment and store in Express.
 */

var port = process.env.PORT ? normalizePort(process.env.PORT) : normalizePort(config.get('port'));
app.set('port', port);

/**
 * Create HTTP server.
 */

var server = http.createServer(app);

/**
 * Listen on provided port, on all network interfaces.
 */

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

/**
 * Normalize a port into a number, string, or false.
 */

function normalizePort (val) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

/**
 * Event listener for HTTP server "error" event.
 */

function onError (error) {
  if (error.syscall !== 'listen') {
    throw error;
  }

  var bind = typeof port === 'string'
    ? 'Pipe ' + port
    : 'Port ' + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case 'EACCES':
      winston.error(bind + ' requires elevated privileges');
      process.exit(1);
    case 'EADDRINUSE':
      winston.error(bind + ' is already in use');
      process.exit(1);
    default:
      throw error;
  }
}

/**
 * Event listener for HTTP server "listening" event.
 */

function onListening () {
  var addr = server.address();
  var bind = typeof addr === 'string'
    ? 'pipe ' + addr
    : 'port ' + addr.port;
  winston.verbose('Listening on ' + bind);
}
