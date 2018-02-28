'use strict';

function arrayMax(arr) {
  let total = 0;
  let max = 0;
  for (let i = 0; i < arr.length; i++) {
    if (total + arr[i] < 0) {
      total = 0;
    } else {
      console.log('total = ', total);
      total = total + arr[i];
      console.log('new total = ', total);
      if (max < total)
        max = total;
    }

  }
  return max;
}

function mergeArrays(arr1, arr2) {

  let newArr = arr1.concat(arr2);
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let n = 0; n < newArr.length; n++) {
      if (newArr[n] > newArr[n + 1]) {
        let temp = newArr[n];
        newArr[n] = newArr[n + 1];
        newArr[n + 1] = temp;
        sorted = false;
      }

    }
  }
  return newArr;

}

console.log(arrayMax([-7, 2, -3, -2, 8, -1]));
console.log(mergeArrays([1, 4, 6, 7], [2, 5, 8, 0, 10, 45]));