const chainMaker = {
  result: [],
  getLength() {
    return this.result.length;
  },
  addLink(value) {
    this.result.push(String(value));
    return this;
  },
  removeLink(position) {
    if (Number.isInteger(position)) {
      this.result.splice(position - 1, 1);
      return this;
    } else {
      this.result = [];
      throw Error();
    }
  },
  reverseChain() {
    this.result.reverse();
    return this;
  },
  finishChain() {
    let chain = this.result.map(e => `( ${e} )`).join('~~');
    this.result = [];
    return chain;
  }
};

module.exports = chainMaker;