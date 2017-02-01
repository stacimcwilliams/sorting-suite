let mergeSort = (array) => {






//while array.length > 0
  var itemsArray = [];

  while (array.length > 0) {
    itemsArray.push(array.splice(0,1));
  };
//take first two items and put them in own array
//repeat that for all additional items so there are x number of array
//if there is one single left add to the last array
//then we need to compare the first two arrays and sort the 0 index of each into a combined array until the original array length is 0
//then do the same for the next two and so on
//keep sorting back up and comparing the zero index of the array 

  return array;

}

module.exports = mergeSort
