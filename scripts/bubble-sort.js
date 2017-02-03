const bubbleSort = (bubbleArray) => {

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
