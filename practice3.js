// Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.

const replaceCharInStrWithNextChar = (str) =>
  str
    .split("")
    .map((ch) => String.fromCharCode(ch.charCodeAt(0) + 1))
    .join("");

console.log(replaceCharInStrWithNextChar("abcd"));
