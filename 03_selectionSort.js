const arr1 = [
  0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 4, 1, 7, -1, -5, 23, 6, 2, 35, 6, 3,
]; // [0,1,1,2,3.......]

const arr2 = [0, 3, 2, 5, 6, 8, 1, 9, 4, 2, 1, 2, 9, 6, 3];

function selectionSort(arr) {
  const array = [...arr];

  for (let i = 0; i < array.length; i += 1) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }

    let tmp = array[minIndex];
    array[minIndex] = array[i];
    array[i] = tmp;
  }

  return array;
}

console.log(selectionSort(arr1));
console.log(selectionSort(arr2));

// node 03_selectionSort.js
