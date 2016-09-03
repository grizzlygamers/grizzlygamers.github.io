var React = require('react');
var Page = require('./components/page');
var Navigation = require('./components/navigation');
var Header = require('./components/header');
module.exports = props =>

<Page className="page-home" title="Home Page">
  <Header/>

  { /* Menu */ }
  <Navigation/>

  <h1>Put "Home" content here</h1>
</Page>
