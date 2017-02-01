// //mergeSort(["d", "b", "a", "c"])
// //=> ["a", "b", "c", "d"]
//
//
// import { expect } from 'chai';
// import mergeSort from '../scripts/merge-sort'
//
// describe ('mergeSort',() => {
//   describe('array', () => {
//  it('should return an array', () => {
//     expect(Array.isArray(mergeSort([]))).to.be.true
//   });
// })
// it('should return an array that has been sorted alphabetically', () => {
//   let sortedArray = mergeSort(['d', 'b', 'a', 'c'])
//   expect(sortedArray).to.deep.equal(['a','b','c','d'])
// });
//
// it('should return an array that has been sorted numerically', () => {
//   let unsortedArray = mergeSort(['4', '2', '1', '3'])
//   expect(unsortedArray).to.deep.equal(['1','2','3','4'])
// });
//
// it('should not unsort a alphabetically sorted array', () => {
//   let sortedArray = mergeSort(['a', 'b', 'c', 'd'])
//   expect(sortedArray).to.deep.equal(['a', 'b', 'c', 'd'])
// });
//
// it('should not unsort a numerically sorted array', () => {
//   let sortedArray = mergeSort(['1', '2', '3', '4'])
//   expect(sortedArray).to.deep.equal(['1', '2', '3', '4'])
// });
//
// })
