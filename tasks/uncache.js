module.exports = pattern => {
  Object.keys(require.cache).forEach(function(key) {
    if (pattern.test(key)) {
      delete require.cache[key];
    }
  });
};
