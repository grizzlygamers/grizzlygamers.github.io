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

'.header': {
  height: '200px',
},

nav: {
  background: '#ddd',
  margin: '10px 0',
  a: {
    color: '#000',
    textDecoration: 'none',
    display: 'inline-block',
    padding: '20px 10px',
    width: '16%',
    transition: 'all 0.7s ease',

    '&:hover': {
      color: '#fff',
      backgroundColor: '#777',
    },
  },
},

'.page': {
  background: '#fff',
  width: '800px',
  margin: '0 auto',
},

};
