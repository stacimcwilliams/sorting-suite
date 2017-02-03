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
//would like to see testing to test the merge sort 
}

export default mergeSort
