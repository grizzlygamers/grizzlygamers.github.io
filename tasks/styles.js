var fs = require('fs');
var gussy = require('gussy');
var sane = require('sane');
var uncache = require('./uncache');
var config = require('./config');

module.exports = function styles(opts) {
  uncache(new RegExp(config.styleRoot));
  opts = opts || {};

  var gussyOpts = {
    outputStyle: opts.minify ? 'compressed' : 'nested'
  }

  var startTime = Date.now();

  gussy(gussyOpts).compile(require('../' + config.styleMain), function(compiled) {
    fs.writeFile(config.styleBundle, compiled, function(err) {
      if (err) {
        console.error('Failed to write css file:', err);
        return;
      }

      console.log(config.styleBundle + ' built in ' + (Date.now() - startTime) + ' ms');
    });
  });

  if (opts.watch) {
    opts.watch = false;
    var watchCallback = styles.bind(this, opts);
    var watcher = sane(config.styleRoot, { glob: ['**/*.js'] });
    watcher.on('change', watchCallback);
    watcher.on('add', watchCallback);
    watcher.on('delete', watchCallback);
  }
};
