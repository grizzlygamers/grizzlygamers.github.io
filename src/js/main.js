document.body.addEventListener('mouseover', e => {
  if (!/^nav/.test(e.target.id)) {
    return;
  }

  // Remove hover state from all top-level navs
  [].forEach.call(document.querySelectorAll('.navigation nav a'), el => el.classList.remove('hover'));

  // Add hover state to current top-level nav
  e.target.classList.add('hover');

  // Hide whatever subnav is already showing
  [].forEach.call(document.querySelectorAll('.navigation .show'), el => el.classList.remove('show'));

  // Show the subnav content for this navigation item
  document.querySelector(`[for="${e.target.id}"]`).classList.add('show');
});
