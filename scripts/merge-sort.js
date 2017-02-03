function mergeSort(array) {
  if (array.length < 2) {
  return array
  }
  var mergeArray = Math.floor(array.length/2)
  var leftArray = array.slice(0, mergeArray)
  var rightArray = array.slice(mergeArray, array.length)
  return merge(mergeSort(leftArray),mergeSort(rightArray));
}

function merge(leftArray,rightArray) {
  let completedArray = [];
   while (leftArray.length  && rightArray.length){
    if (leftArray[0] < rightArray[0]) {
      completedArray.push(leftArray.shift())
    } else if (leftArray[0] > rightArray[0]) {
      completedArray.push(rightArray.shift())
    }
  }
    return completedArray.concat(leftArray).concat(rightArray)

}

export default mergeSort





// } else if (leftArray.length === 0) {
//   completedArray.push(rightArray.shift())
// } else {
//   completedArray.push(leftArray.shift())
// }


//split the array in half
//target the left and right sides
//take first two items and put them in own array
//repeat that for all additional items so there are x number of array
//if there is one single left add to the last array
//then we need to compare the first two arrays and sort the 0 index of each into a combined array until the original array length is 0
//then do the same for the next two and so on
//keep sorting back up and comparing the zero index of the array
//recursion used to call the sorting? function inside a function until everything is sorted
