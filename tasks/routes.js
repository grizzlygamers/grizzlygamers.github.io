// URL portion : page portion
var routes = {
  '/': 'home',
  '/games': 'games',
  '/ranking': 'ranking',
  '/about': 'about',
  '/contact': 'contact',
  '/players': 'players',
};

module.exports = {
  routes,
  getPath: viewName => Object.keys(routes).filter(path => routes[path] === viewName)[0]
};
