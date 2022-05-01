const fizzbuzz = require('./fizzbuzz.js');

describe('testing fizzbuzz function', () => {
  test('The argument of 5 should return Buzz', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
  test('The argument of 4 should return 4', () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
  test('The argument of 3 should return Fizz', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
  test('The argument of 15 should return FizzBuzz', () => {
    expect(fizzbuzz(15)).toEqual('FizzBuzz');
  });
});

// describe('is num multiplier of 3', () => {
//   test('');
// });

// describe('add', function () {
//   test('testing test', () => {
//     expect(2 + 5).toEqual(7);
//   });

//   test('it exists', () => {
//     expect(add).toBeDefined;
//   });

//   test('2 +3 equals 5', () => {
//     expect(add(2, 3)).toEqual(5);
//   });

//   test('makes a sentence', () => {
//     expect(add('hello, ', 'world').toBe('hello, world'));
//   });
// });

// let add = calcHelpers.sum;
