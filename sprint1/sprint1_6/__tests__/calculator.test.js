
const {sum, subtract, multiply, divide} = require('../app/calculator.js');

//tests that the functions executes the correct operations
//and return correct or expected answers 



test('adds 1 to 2 to equal 3', () => {
 expect(sum(1, 2)).toBe(3);
 expect(sum(1,"E")).toBe('1E');
});

test('subtracts 1 from 2 to equal 1', () => {
 expect(subtract(2, 1)).toBe(1);
 expect(subtract(1,"E")).toBe(NaN);
});

test('multiplies 2 with 2 to equal 4', () => {
  expect(multiply(2, 2)).toBe(4);
  expect(multiply(1,"E")).toBe(NaN);
});

test('divides 4 with 2 to equal 2', () => {
  expect(divide(4, 2)).toBe(2);
  expect(divide(1, "E")).toBe(NaN);
  expect(divide(1, 0)).toBe(Infinity);
 
});
  