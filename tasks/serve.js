var connect = require('connect');
var compression = require('compression');
var serveStatic = require('serve-static');
var http = require('http');
var config = require('./config');

var filterServeStatic = function(regexp, middleware) {
  return function(req, res, next) {
    if (regexp.test(req.url)) {
      return middleware(req, res, next);
    }

    next();
  };
};

module.exports = function() {
  var server = connect();
  server.use(compression());
  server.use(filterServeStatic(/^\/assets\//i, serveStatic('./')));
  server.use(serveStatic(config.web));

  http.createServer(server).listen(config.port);
  console.log('Listening on http://localhost:' + config.port + '/ ...');
};
