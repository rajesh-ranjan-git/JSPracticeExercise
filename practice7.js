// Write a JavaScript program to create a new string from a given string taking the first 3 characters and the last 3 characters and adding them together. The string length must be 3 or more, if not, the original string is returned.

// const newString = (str) =>
//     str.length < 3 ? str : str.substring(str.length - 3, str.length).concat(str);

const newString = (str) =>
  str.length < 3 ? str : str.slice(0, 3).concat(str.slice(-3));

console.log(newString("rajesh ranjan"));
