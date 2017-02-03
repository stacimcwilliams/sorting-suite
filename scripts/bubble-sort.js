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
