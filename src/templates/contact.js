var React = require('react');
var Page = require('./components/page');
var Navigation = require('./components/navigation');
var Header = require('./components/header');
module.exports = props =>

<Page className="page-contact" title="Contact">
  <Header/>

  { /* Menu */ }
  <Navigation/>

  <h1>Put "Contact" content here</h1>

</Page>
