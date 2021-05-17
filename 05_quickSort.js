const arr1 = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
]; // [0,1,1,2,3.......]

const arr2 = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 3];

function quickSort(array) {
  if (array.length <= 1) {
    return array;
  }

  // let pivotIndex = Math.floor(array.length / 2);
  let pivotIndex = 0;
  let pivot = array[pivotIndex];
  let less = [];
  let greater = [];

  for (let i = 0; i < array.length; i++) {
    if (i === pivotIndex) continue;
    if (array[i] < pivot) {
      less.push(array[i]);
    } else if (array[i] >= pivot) {
      greater.push(array[i]);
    }
  }

  return [...quickSort(less), pivot, ...quickSort(greater)];
}

console.log(quickSort(arr1));
console.log(quickSort(arr2));

// node 05_quickSort.js
