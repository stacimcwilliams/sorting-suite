


// loop through an array
// target the 0 and 1 index and compare
//move to the 1 index and compare it to the 0 index
// move to the 2 index and compare it to the 0 index and 1 index
//insert in correct spot
//loop through array until sorted and then have a condition met to break the loop

function insertionSort(array) {

  for (var i = 1; i < array.length; i++) {

    var currentIndex = array[i]

    for (var sorted = i - 1; sorted >= 0 && array[sorted] > currentIndex; sorted--)  {
      array[sorted + 1] = array[sorted]
    }
    array[sorted + 1] = currentIndex
  }
  return array

}

export default insertionSort







// const insertionSort = (insertionArray) => {
//
// var currentIndex = index;
// var nextIndex = index - 1;
// var sortedArray = [];
//
//
//
//
// insertionArray.forEach(function(value,index,totalArray) {
//   sortedArray.push[insertionArray.index[0]]
//   if (currentIndex > nextIndex && index !==0) {
//     console.log(currentIndex)
//     console.log(nextIndex)
//     var nextElement = nextIndex++;
//     currentIndex = nextIndex;
//     nextIndex = nextElement;
//     console.log(nextIndex);
//   } else {
//   }
// })
//
// }
//
// return sortedArray;
//
// }
//
// export default insertionSort
//
//
//
//








// const validateString = (string) => {
//   if(typeof string !== 'string') {
//   throw 'error'
// }
// if (!string) {
//   throw 'error'
// }
// }
//
// export default validateString
