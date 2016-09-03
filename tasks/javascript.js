var fs = require('fs');
var browserify = require('browserify');
var watchify = require('watchify');
var config = require('./config');
var errorHandler = require('./error-handler');

module.exports = opts => {
  opts = opts || {};

  var b = browserify({
    debug: !opts.minify,
    cache: {},
    packageCache: {},
    paths: [config.jsRoot]
  });

  if (opts.watch) {
    b = watchify(b);
  }

  b.transform('babelify', { presets: ['react', 'es2015-loose'] });

  if (opts.minify) {
    b.transform({
      global: true,
      mangle: true,
      mangle: {
        toplevel: true
      },
      compress: {
        unsafe: true,
        drop_debugger: true,
        drop_console: true
      }
    }, 'uglifyify');
  }

  var builtMessage = function(time) {
    console.log(config.jsBundle + ' built in ' + time + ' ms');
  };

  var update = function() {
    var writeStream = fs.createWriteStream(config.jsBundle);
    b.bundle().on('error', errorHandler).pipe(writeStream);

    if (!opts.watch) {
      var time = Date.now();
      writeStream.on('close', function() {
        builtMessage(Date.now() - time);
      });
    }
  };

  if (opts.watch) {
    b.on('update', update);
    b.on('time', builtMessage);
  }

  b.require(config.jsMain, { entry: true });
  update();
};
