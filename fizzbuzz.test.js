const fizzbuzz = require('./fizzbuzz.js');

describe('testing fizzbuzz function', () => {
  test('when I place 5 I expect to see Buzz', () => {
    expect(fizzbuzz(5)).toEqual('Buzz');
  });
  test('placed number 4 i expect to see 4 as the outcome', () => {
    expect(fizzbuzz(4)).toEqual(4);
  });
  test('When the argument is 3 I expect the outcome to be Fizz', () => {
    expect(fizzbuzz(3)).toEqual('Fizz');
  });
  test('the argument of 15 should return FizzBuzz', () => {
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
