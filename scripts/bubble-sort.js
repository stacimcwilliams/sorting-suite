// forEach loop that has a conditional if met swaps the items in the array
// need the value and the index of the array
//return the sorted array
//variable named previous pointing to the first element (index 0)
//variable named current pointing to the second value (index 1)
//if current is less than previous the two values are swapped
//then the algo would advance one spot to the right

const bubbleSort = (bubbleArray) => {

  // var sorted = true;

  do {
    var sorted = true;
    bubbleArray.forEach(function(value,index,totalArray) {
      if (value > totalArray[index + 1]) {
        sorted = false;
        bubbleArray[index] = totalArray[index + 1];
        bubbleArray[index + 1] = value;
      }
    })

  } while (!sorted);

  return bubbleArray;
}

export default bubbleSort
















//
// import validateString from './validate-string.js'
//
// const filterMe = (array, string) => {
//   //we need to check if the second argument is actually a string
//   //if string is not a string
//   //throw an error
//   validateString(string)
// let filtered = array.filter((value) => {
//   return value !== string
// });
// return filtered
// }
//
// export default filterMe
