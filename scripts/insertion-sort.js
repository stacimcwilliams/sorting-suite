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
