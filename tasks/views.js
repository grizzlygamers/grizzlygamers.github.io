var React = require('react');

var inflate = (routes, templatesRoot) => {
  var views = {};
  var viewCache = {};

  var route = (path, view) => {
    viewCache[view] = viewCache[view] || React.createFactory(require('../' + templatesRoot + view));

    var outputFile;
    path = path.replace(/^\.+/, '');
    if (path[0] !== '/') {
      path = '/' + path;
    }

    if (!/\.html$/.test(path)) {
      path = path.replace(/\/+$/, '') + '/';
      outputFile = path + 'index.html';
    } else {
      outputFile = path;
    }

    views[path] = viewCache[view]({
      path: path,
      file: outputFile.slice(1)
    });
  };

  for (let path in routes) {
    route(path, routes[path]);
  }

  return views;
};

module.exports = { inflate };
