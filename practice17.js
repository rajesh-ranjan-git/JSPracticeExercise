// Write a JavaScript program to replace the first digit in a string (should contain at least one digit) with a $ character.

const replaceFirstDigitWith$ = (str) => {
  const tempArr = str.split("");
  tempArr[0] = "$";
  return tempArr.join("");
};

console.log(replaceFirstDigitWith$("9rajesh"));
