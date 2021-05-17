const arr1 = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
]; // [0,1,1,2,3.......]

const arr2 = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 3];

function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j + 1] < array[j]) {
        let tmp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = tmp;
      }
    }
  }
  return array;
}

console.log(bubbleSort(arr1));
console.log(bubbleSort(arr2));

// node 04_bubbleSort.js
