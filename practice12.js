// Write a JavaScript program to find the number of even numbers in a an array of integers.

const arr = [3, 32, 6, 75, 23, 45, 66];

const findEven = (arr) => arr.filter((value) => value % 2 === 0 && value);

console.log(findEven(arr));
