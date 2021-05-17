const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

function binarySearch(array, item) {
  let start = 0;
  let end = array.length - 1;
  let middle;
  let found = false;
  let position = -1;

  while (found === false && start <= end) {
    middle = Math.floor((start + end) / 2);

    // console.log('start', start);
    // console.log('end', end);
    // console.log('middle', middle);
    // console.log('---');

    if (item === array[middle]) {
      found = true;
      position = middle;
      return position;
    }
    if (item > array[middle]) {
      start = middle + 1;
    }

    if (item < array[middle]) {
      end = middle - 1;
    }
  }

  return position;
}

function recursiveBinarySearch(array, item, start = 0, end = array.length - 1) {
  let middle = Math.floor((start + end) / 2);

  if (item === array[middle]) {
    return middle;
  }

  if (item > array[middle]) {
    let newStart = middle + 1;
    return recursiveBinarySearch(array, item, newStart, end);
  }

  if (item < array[middle]) {
    let newEnd = middle - 1;
    return recursiveBinarySearch(array, item, start, newEnd);
  }
}

console.log(binarySearch(array, 11));

console.log(recursiveBinarySearch(array, 11));

// node 02_binarySearch.js
