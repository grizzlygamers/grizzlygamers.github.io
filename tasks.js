require("babel-register")({
  presets: ['react', 'es2015-loose']
});

var fs = require('fs');
var del = require('del');
var config = require('./tasks/config');
var errorHandler = require('./tasks/error-handler');

process.on('uncaughtException', errorHandler);

var tasks = {};
tasks.javascript = require('./tasks/javascript');
tasks.styles = require('./tasks/styles');
tasks.serve = require('./tasks/serve');
tasks.templates = require('./tasks/templates');

tasks.compile = function() {
  tasks.clean(function() {
    tasks.javascript();
    tasks.styles();
  });
};

tasks.build = function(opts) {
  tasks.clean(function() {
    tasks.javascript({ minify: true });
    tasks.styles({ minify: true });
    tasks.templates();
  });
};

tasks.dev = function() {
  tasks.clean(function() {
    tasks.javascript({ watch: true });
    tasks.styles({ watch: true });
    tasks.templates({ watch: true });
    tasks.serve();
  });
};

tasks.clean = function(callback) {
  del([config.jsBundle, config.styleBundle]).then(callback);
};

tasks['default'] = function() {
  tasks.dev();
};

var args = process.argv.slice(2);
if (!args.length) {
  tasks['default']();
} else {
  args.forEach(function(task) {
    if (typeof tasks[task] !== 'function') {
      console.error('Unknown task: ' + task);
      return;
    }

    tasks[task]();
  });
}
