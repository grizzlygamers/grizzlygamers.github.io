var React = require('react');
var Page = require('./components/page');
module.exports = props =>

<Page className="page-home" title="Home Page">
  <h1>Welcome!</h1>
  <p>Grizzly Gaming Club aims to educate and inform students about computer programming, technology, and game development through the use of electronic entertainment devices and emphasis on leadership, teamwork, and communication skills.</p>
  <p>This is our first year at Grassfield High School and we are excited to get started.</p>
  <h2>Connect With Us</h2>
  <p>Our gamers use Discord to communicate. We invite you to view our Twitch channel and join our Discord server here.</p>
  <div className="social-logos">
    <a target="_blank" href="https://twitch.tv/grizzlyvgclub"><img title="Twitch" className="twitch-logo" src="/assets/images/twitch-logo.png"/></a>
    <a target="_blank" href="https://discord.gg/Ynaur4W"><img title="Discord" className="discord-logo" src="/assets/images/discord-logo.png"/></a>
  </div>
  <p>Also, you can follow us on Remind by texting @gg1010 to 81010. See our <a href="/contact/">contact page</a> for more information on how you can connect with us.</p>
  <h2>Upcoming Events</h2>
  <iframe src="https://calendar.google.com/calendar/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showTabs=0&amp;showCalendars=0&amp;mode=AGENDA&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=grizzlyvgclub%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FNew_York" frameborder="0" scrolling="no"></iframe>
</Page>
