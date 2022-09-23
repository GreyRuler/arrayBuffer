export default class ArrayBufferConverter {
  constructor() {
    this.buffer = undefined;
  }

  load(buffer) {
    this.buffer = buffer;
  }

  toString() {
    return new Uint8Array(this.buffer).reduce((str, item) => {
      str += String.fromCharCode(item);
      return str;
    }, '');
  }
}
