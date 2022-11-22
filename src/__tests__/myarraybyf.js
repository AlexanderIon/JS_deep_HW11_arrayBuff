import ArrayBufferConverter from '../myarraybufer.js';

const data = 'test';
const testBuffer = new ArrayBuffer(data.length * 2);
const testView = new Uint16Array(testBuffer);
for (let i = 0; i < data.length; i += 1) {
  testView[i] = data.charCodeAt(i);
}
test('test method toString of class ArrayBufferConverter', () => {
//   const data = 'test';
//   const testBuffer = new ArrayBuffer(data.length * 2);
//   const testView = new Uint16Array(testBuffer);
//   for (let i = 0; i < data.length; i++) {
//     testView[i] = data.charCodeAt(i);
//   }
  const testMyConverter = new ArrayBufferConverter(testBuffer);

  expect(testMyConverter.toString()).toBe(data);
});

test('test method load of class ArrayBufferConverter', () => {
  const testMyConverter = new ArrayBufferConverter(testBuffer);

  expect(testMyConverter.load()).toBe([116, 101, 115, 116]);
//   expect(testMyConverter.load()).toEqual(testlist);
});
