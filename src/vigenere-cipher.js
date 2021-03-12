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
    let result = [];
    let abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    string = string.toUpperCase();
    key = key.toUpperCase();
    let str_l = string.length;
    let abc_l = abc.length;
    for (let i = 0,j = 0; i < str_l; i++) {
      if(abc.includes(string[i])){
        let str_i = abc.indexOf(string[i]);
        let key_i = abc.indexOf(key[j]);
        if(mode){
          
          result.push(abc[(str_i - key_i + abc_l) % abc_l]) //decrypt
        }else {
          result.push(abc[(str_i + key_i) % abc_l])// encrypt
        }
        
        if(j === key.length - 1){
          j = 0;
        }else j++;
      }else{
        result.push(string[i])
      }

    }
    return this.direct ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;

// ////////////////////////////////////////////////////////////////


// const directMachine = new VigenereCipheringMachine();
// // directMachine.encrypt('1', '2');
// // directMachine.decrypt(3, 4);
// console.log( directMachine.encrypt('Same length key', 'Samelengthkey'), 'KAYI WIAMMO UIW');
// console.log(directMachine.decrypt('HSVD AJAL ^^', 'behappy'), 'decr = GOOD LUCK ^^')