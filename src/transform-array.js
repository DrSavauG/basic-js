module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw Error;
  let result = [];
  let [din, dip, don, dop]=["--discard-next","--discard-prev","--double-next","--double-prev"];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == dip && arr[i - 2] != din) result.pop();
    if (arr[i] == dop && arr[i - 2] != din) {
      if (arr[i - 1] != undefined) {
        result.push(arr[i - 1]);
      }
      i++;
    }
    if (arr[i] == don) {
      if (arr[i + 1] != undefined) {
        result.push(arr[i + 1]);
      }
      i++;
    }
    if (arr[i] == din) {
      i++;
      continue;
    }
    if ( arr[i] != dip &&arr[i] != dop &&arr[i] != undefined) result.push(arr[i]);
  }
  return result;
};
