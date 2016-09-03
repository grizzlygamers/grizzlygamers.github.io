var React = require('react');

const images = [
  { src: '/assets/images/carousel/duckhunt.jpg' },
  { src: '/assets/images/carousel/littlemac.jpg' },
  { src: '/assets/images/carousel/megaman.jpg' },
  { src: '/assets/images/carousel/villager.jpg' },
  { src: '/assets/images/carousel/wiifitrainer.jpg' },
];

module.exports = props =>

<div className="carousel">
  { images.map((img, index) =>
    <div
      key={index}
      className={['carousel-image'].concat(index === 0 ? 'show' : []).join(' ')}
      style={{backgroundImage: 'url(' + img.src + ')'}}>
    </div>
  )} 
</div>
