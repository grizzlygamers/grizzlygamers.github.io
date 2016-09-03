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

  <h2>Events</h2>
  <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=grizzlyvgclub%40gmail.com&ctz=America/New_York" height="583" width="100%" frameborder="0" scrolling="no"></iframe>
</Page>
