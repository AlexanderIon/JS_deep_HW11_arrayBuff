// const { buffer } = require("stream/consumers");

// function getBuffer() {
//   const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
//   return ((input) => {
//     const buffer = new ArrayBuffer(data.length * 2);
//     const bufferView = new Uint16Array(buffer);
//     for (let i = 0; i < input.length; i++) {
//       bufferView[i] = input.charCodeAt(i);
//     }
//     return buffer;
//   })(data);
// }

export default class ArrayBufferConverter {
  constructor(aBuffer) {
    this.bufferView = new Uint16Array(aBuffer);
  }

  load() {
    return this.bufferView.map((item) => item);
  }

  toString() {
    let bufToStr = '';
    for (let i = 0; i < this.bufferView.length; i += 1) {
      bufToStr += String.fromCharCode(this.bufferView[i]);
    }
    return bufToStr;
  }
}
