// Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more, if not, the original string is returned.

// const newString = (str) =>
//     str.length < 3 ? str : str.substring(str.length - 3, str.length).concat(str);

const newString = (str) => (str.length < 3 ? str : str.slice(-3).concat(str));

console.log(newString("rajesh"));
