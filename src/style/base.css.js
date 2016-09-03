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

'h1, h2, h3, h4, h5, h6': {
  margin: 0,
},

'.header': {
  maxHeight: '307px',
  height: '30vw',
  background: 'url(/assets/images/shulk-banner.png)',
  backgroundSize: 'cover',
  backgroundPosition: '50% 50%',
},

nav: {
  background: '#ddd',
  margin: '0 0 10px 0',
  a: {
    color: '#000',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '20px 10px',
    width: '16.66666666666%',
    transition: 'all 0.7s ease',

    '&:hover': {
      color: '#fff',
      backgroundColor: '#777',
    },
  },
},

'.page': {
  maxWidth: '1024px',
  minHeight: '100%',
  background: '#fff',
  margin: '0 auto',
},

};
