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
  <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=grizzlyvgclub%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no"></iframe>
</Page>
