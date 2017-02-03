//make the following test pass
//bubbleSort(["d", "b", "a", "c"])
// => ["a", "b", "c", "d"]
import { expect } from 'chai';
import bubbleSort from '../scripts/bubble-sort'

describe ('bubbleSort',() => {
  describe('array', () => {
 it('should return an array', () => {
    expect(Array.isArray(bubbleSort([]))).to.be.true
 });

  })
it('should return an array that has been sorted alphabetically', () => {
  let sortedArray = bubbleSort(['d', 'b', 'a', 'c'])
  expect(sortedArray).to.deep.equal(['a','b','c','d'])
});

it('should return an array that has been sorted numerically', () => {
  let unsortedArray = bubbleSort(['4', '2', '1', '3'])
  expect(unsortedArray).to.deep.equal(['1','2','3','4'])
});

it('should not unsort a alphabetically sorted array', () => {
  let sortedArray = bubbleSort(['a', 'b', 'c', 'd'])
  expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd'])
});

it('should not unsort a numerically sorted array', () => {
  let sortedArray = bubbleSort(['1', '2', '3', '4'])
  expect(sortedArray).to.deep.equal(['1', '2', '3', '4'])
});

})
