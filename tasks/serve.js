var connect = require('connect');
var compression = require('compression');
var serveStatic = require('serve-static');
var http = require('http');
var config = require('./config');

module.exports = function() {
  var server = connect();
  server.use(compression());
  server.use(serveStatic(config.web));

  http.createServer(server).listen(config.port);
  console.log('Listening on http://localhost:' + config.port + '/ ...');
};
