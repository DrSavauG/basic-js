const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  return arr.flat().reduce((a, b) => a + (b == "^^" ? 1 : 0), 0);
};
