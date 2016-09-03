// URL portion : page portion
var routes = {
  '/': 'home',
  '/games': 'games',
  '/leaderboards': 'leaderboards',
  '/about': 'about',
  '/contact': 'contact',
  '/players': 'players',
};

module.exports = {
  routes,
  getPath: viewName => Object.keys(routes).filter(path => routes[path] === viewName)[0]
};
