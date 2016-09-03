var React = require('react');
var Page = require('./components/page');
module.exports = props =>

<Page className="page-home" title="Home Page">
  <h1>Welcome</h1>
  <p>Grizzly Gaming Club aims to educate and inform students about computer programming, technology, and game development through the use of electronic entertainment devices and emphasis on leadership, teamwork, and communication skills.</p>

  <h2>Events</h2>
  <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=grizzlyvgclub%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no"></iframe>
</Page>
