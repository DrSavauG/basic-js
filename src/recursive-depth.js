module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let result = 1
    arr.forEach(e => Array.isArray(e) ? result = Math.max(this.calculateDepth(e) + 1, result) : false);
    return result
  }
}