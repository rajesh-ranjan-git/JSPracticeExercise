// Write a JavaScript program to check two numbers and return true if one of the number is 100 or if the sum of the two numbers is 100.

// const checkFor100 = (num1, num2) => {
//   if (num1 === 100 || num2 === 100) {
//     return true;
//   } else if (num1 + num2 === 100) {
//     return true;
//   }
// };

const checkFor100 = (num1, num2) =>
  num1 === 100 || num2 === 100 || num1 + num2 === 100;

console.log(checkFor100(5, 100));
