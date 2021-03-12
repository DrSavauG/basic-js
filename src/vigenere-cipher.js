class VigenereCipheringMachine {
  constructor(direct = true) {
    this.direct = direct;
  }
  encrypt(string, key) {
    return this.engine(string, key);
  }
  decrypt(string, key) {
    return this.engine(string, key, true);
  }
  engine(string, key, mode = false) {
    if (!string || !key) throw Error();
    string = string.toUpperCase();
    key = key.toUpperCase();
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let result = [],
      abc_l = abc.length;
    for (let i = 0, j = 0,sign = 0; i < string.length; i++) {
      if (abc.includes(string[i])) {
        let str_i = abc.indexOf(string[i]);
        let key_i = abc.indexOf(key[j]);
        mode ? sign = -1 : sign = +1;
        result.push(abc[(str_i + (key_i * sign) + abc_l) % abc_l]);
        j = ++j % key.length;
      } else {
        result.push(string[i])
      }
    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}
module.exports = VigenereCipheringMachine;