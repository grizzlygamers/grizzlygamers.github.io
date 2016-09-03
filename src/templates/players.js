var React = require('react');
var Page = require('./components/page');
var Navigation = require('./components/navigation');
var Header = require('./components/header');
module.exports = props =>

<Page className="page-players" title="Players">
  <Header/>

  { /* Menu */ }
  <Navigation/>

  <h1>Put "Players" content here</h1>

</Page>
