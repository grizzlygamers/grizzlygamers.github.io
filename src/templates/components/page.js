var React = require('react');
module.exports = props =>

<html>
  <head>
    <meta charSet="utf-8"/>
    <title>{props.title}</title>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
    <link rel="stylesheet" type="text/css" href="/styles.css"/>
  </head>
  <body>
    <div className={['page container', props.className || ''].join(' ')}>
      { props.children }
    </div>
    <script src="/app.js"/>
  </body>
</html>
