var fs = require('fs');
var path = require('path');
var mkdirp = require('mkdirp');
var React = require('react');
var ReactDOM = require('react-dom/server');
var sane = require('sane');
var uncache = require('./uncache');
var beautify = require('js-beautify').html_beautify;
var config = require('./config');
var inflateViews = require('./views').inflate;

var renderStatic = function(component) {
  return [
    '<!doctype html>',
    beautify(ReactDOM.renderToStaticMarkup(component), {
      indent_inner_html: true, indent_size: 2, extra_liners: []
    })
  ].join('\n');
};

module.exports = function templates(opts) {
  uncache(new RegExp(config.templatesRoot));
  opts = opts || {};

  var views = inflateViews(config.routes, config.templatesRoot);
  Object.keys(views).forEach(function(viewName) {
    var view = views[viewName];
    var markup = renderStatic(view);
    mkdirp.sync(path.dirname(config.web + view.props.file, markup));
    fs.writeFile(config.web + view.props.file, markup);
  });

  if (opts.watch) {
    opts.watch = false;
    var watchCallback = templates.bind(this, opts);
    var watcher = sane(config.templatesRoot, { glob: ['**/*.js'] });
    watcher.on('change', watchCallback);
    watcher.on('add', watchCallback);
    watcher.on('delete', watchCallback);
  }
};
