
//make the following test pass
//bubbleSort(["d", "b", "a", "c"])
// => ["a", "b", "c", "d"]
import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

// const assert = require('mocha').assert;

describe ('bubbleSort',() => {
  describe('array', () => {
 it('should return an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true
  });
})
it('should return an array that has been sorted', () => {
  let sortedArray = bubbleSort(['f', 'a', 'c', 'b'])
  expect(sortedArray).to.deep.equal(['a','b','c','f'])
});
})










// import { expect } from 'chai';
// import filterMe from '../scripts/filter'
//
// describe('TDD with filter', () => {
//   it('should return to me an array', () => {
//     expect(Array.isArray(filterMe([], 'hello'))).to.be.true
//   });
//
//   it('should return an array that is sorted correctly', () => {
//     let filterMeToo = filterMe(['suh', 'dude', 'dude', 'suh', 'tacos', 'skateboards'], 'suh')
//
//     expect(filterMeToo.length).to.equal(4)
//     expect(filterMeToo).to.deep.equal(['dude', 'dude', 'tacos', 'skateboards'])
//   });
//
//   it('should throw an error when the function receives a non string', () => {
//     expect(() => filterMe(['a','c','f','d'], 5)).to.throw('error');
//   })
//
//   it('should throw an error if there is an empty string given', () => {
//       expect(() => filterMe(['a','c','f','d'], '')).to.throw('error');
//   })
// })
