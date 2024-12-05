// Given two values, write a JavaScript program to find out which one is nearest to 100.

const nearestTo100 = (num1, num2) =>
  Math.abs(100 - num1) > Math.abs(100 - num2) ? num2 : num1;

console.log(nearestTo100(66, 187));
