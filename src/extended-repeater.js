module.exports = function repeater(str, options) {
  let [result, string, repeatTimes, separator, addition, additionRepeatTimes, additionSeparator] = ['', str + "", options.repeatTimes || 1, options.separator || "+", options.addition === undefined ? "" : options.addition + "", options.additionRepeatTimes || 1, options.additionSeparator || "|"];
  for (let i = repeatTimes; i > 0; i--) {
    result += string;
    for (let j = additionRepeatTimes; j > 0; j--) {
      result += addition;
      if (j > 1) result += additionSeparator;
    }
    if (i > 1) result += separator;
  }
  return result;
}