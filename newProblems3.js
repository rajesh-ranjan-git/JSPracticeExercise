// 3. Sort 2 arrays

const arr1 = [1, 2, 5, 9];
const arr2 = [3, 4, 5, 6, 9];
const arr3 = [];
let i = 0;
let j = 0;

console.log(i, j);

while (i < arr1.length && j < arr2.length) {
  if (arr1[i] < arr2[j]) {
    arr3.push(arr1[i++]);
  } else {
    arr3.push(arr2[j++]);
  }
}

while (i < arr1.length) {
  arr3.push(arr1[i++]);
}

while (j < arr2.length) {
  arr3.push(arr2[j++]);
}

console.log(arr3);
