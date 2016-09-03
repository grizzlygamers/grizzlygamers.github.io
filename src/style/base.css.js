module.exports = {

html: {
  boxSizing: 'border-box',
  textAlign: 'center',
  fontFamily: 'Arial, Helvetica, Verdana, sans-serif',
},

'*, *:before, *:after': {
  boxSizing: 'inherit',
},

'html, body': {
  height: '100%',
},

body: {
  background: '#000',
},

nav: {
  margin: '10px 0',
  a: {
    display: 'inline-block',
    margin: '0 10px',
  },
},

'.page': {
  background: '#fff',
  width: '800px',
  margin: '0 auto',
},

};
