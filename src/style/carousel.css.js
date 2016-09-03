module.exports = {

'.carousel': {
  position: 'relative',
  height: '30vw',
  overflow: 'hidden',

  '.carousel-image': {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    opacity: 0,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
    transition: 'opacity 1s ease',

    '&.show': {
      opacity: 1
    },
  },
},

};
