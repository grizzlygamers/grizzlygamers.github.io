(function initCarousel() {
  var root = document.querySelector('.carousel');
  if (!root) {
    return;
  }
  console.warn(root);

  var images = root.querySelectorAll('.carousel-image');
  var current = 0;

  (function loop() {
    setTimeout(function() {
      images[current].classList.remove('show');
      current = (current + 1) % images.length;
      images[current].classList.add('show');
      loop();
    }, 3000);
  }());
}());
