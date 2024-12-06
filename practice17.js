// Write a JavaScript program to replace the first digit in a string (should contain at least one digit) with a $ character.

// const replaceFirstDigitWith$ = (str) => {
//   const tempArr = str.split("");
//   tempArr[0] = "$";
//   return tempArr.join("");
// };

// const replaceFirstDigitWith$ = (str) => str.replace(/[0-9]/, "$");

const replaceFirstDigitWith$ = (str) => str.replace(/\d/, "$");

console.log(replaceFirstDigitWith$("rajesh9ranjan"));
