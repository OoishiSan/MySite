// test.js (или __tests__/test.js)
const ConcSum = require('../script.js');

test('adds a + b to equal ab', () => {
  expect(ConcSum("a", "b")).toBe("ab"); 
}); 

test('adds Simple + Site to equal Simple Site', () => {
  expect(ConcSum("Simple", " Site")).toBe("Simple Site");
}); 

test('adds -7 + 4 to equal 3', () => {
  expect(ConcSum(-7, 4)).toBe(-3);
});

test('adds 2 + 2 to equal 4', () => {
  expect(ConcSum(2, 2)).toBe(4);
});

