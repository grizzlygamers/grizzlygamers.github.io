module.exports = err => {
  console.log(String(err));
  if (err.codeFrame) {
    console.log(err.codeFrame);
  }
};
