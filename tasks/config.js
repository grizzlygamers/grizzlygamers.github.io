var React = require('react');
var config = {};
config.jsRoot = './src/js/'
config.jsMain = config.jsRoot + 'main.js';
config.styleRoot = './src/style/';
config.styleMain = config.styleRoot + 'styles.js';
config.templatesRoot = './src/templates/';
config.web = './web/';
config.port = 8888;
config.jsBundle = config.web + 'app.js';
config.styleBundle = config.web + 'styles.css';
config.routes = require('./routes').routes;

module.exports = config;
