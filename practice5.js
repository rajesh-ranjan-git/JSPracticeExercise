// Write a JavaScript program to create a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.

const newString = (str) => (str.startsWith("New!") ? str : `New! ${str}`);

console.log(newString("offers"));
