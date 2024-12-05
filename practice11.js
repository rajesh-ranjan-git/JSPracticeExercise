// Write a JavaScript program to check a given string contains 2 to 4 occurrences of a specified character.

// const check2To4Occurrences = (str, ch) => {
//   const temp = str.split("").filter((c) => c === ch).length;
//   if (temp >= 2 && temp <= 4) {
//     return temp;
//   }
//   return `Occurrences of ${ch} in ${str} is not between 2 to 4.`;
// };

const check2To4Occurrences = (str, ch) =>
  str.split("").filter((c) => c === ch).length >= 2 &&
  str.split("").filter((c) => c === ch).length <= 4
    ? str.split("").filter((c) => c === ch).length
    : `Occurrences of ${ch} in ${str} is not between 2 to 4.`;

console.log(check2To4Occurrences("rajeshranjan", "e"));
