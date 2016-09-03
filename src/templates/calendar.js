var React = require('react');
var Page = require('./components/page');
var Navigation = require('./components/navigation');
var Header = require('./components/header');
module.exports = props =>

<Page className="calendar-page" title="Calendar">
  <Header/>

  { /* Menu */ }
  <Navigation/>

  <iframe src="https://calendar.google.com/calendar/embed?height=600&wkst=1&bgcolor=%23FFFFFF&src=grizzlyvgclub%40gmail.com&ctz=America/New_York" height="583" width="850" frameborder="0" scrolling="no"></iframe>
</Page>
