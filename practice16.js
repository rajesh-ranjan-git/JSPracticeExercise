// Write a JavaScript program to get the largest even number from an array of integers.

const arr = [3, 32, 6, 76, 23, 45, 63];

const checkLargestEvenNum = (arr) =>
  arr.reduce((prev, curr) => (curr > prev && curr % 2 === 0 ? curr : prev));

console.log(checkLargestEvenNum(arr));
