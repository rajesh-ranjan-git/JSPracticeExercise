// Write a JavaScript program to concatenate two strings except their first character.

// const concatStrExceptFirstChar = (str1, str2) =>
//   str1.slice(1, str1.length).concat(str2.slice(1, str2.length));

const concatStrExceptFirstChar = (str1, str2) =>
  str1.slice(1, str1.length).concat(str2.slice(1, str2.length));

console.log(concatStrExceptFirstChar("rajesh", "ranjan"));
