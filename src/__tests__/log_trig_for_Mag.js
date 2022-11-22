import Magician from '../magisian.js';

test('test class Magician', () => {
  const testMag = new Magician();
  testMag.name = 'Mag_Alex';
  testMag.attact = 90;
  const res = [testMag.name, testMag.getAttact, testMag.getStoned];
  expect(res).toEqual(['Mag_Alex', 90, false]);
});

test('test of setStoned', () => {
  const testMag = new Magician();
  testMag.setStoned = true;
  expect(testMag.getStoned).toBe(true);
});

const dataList = [
  ['the next field', 0, 100],
  ['the second field', 1, 90],
  ['the fifth field', 4, 60],
];

const hendl = test.each(dataList);
hendl('test attact on %s', (nameTest, distantceTest, attactTest) => {
  const testMag = new Magician();
  testMag.attact = 100;
  testMag.setValueAttact = distantceTest;
  expect(testMag.getAttact).toBe(attactTest);
});

test('test of attact with Stoned', () => {
  const testMag = new Magician();
  testMag.stoned = true;
  testMag.attact = 100;
  testMag.setValueAttact = 1;
  expect(testMag.getAttact).toBe(85);
});
