// Write a JavaScript function that returns a passed string with letters in alphabetical order.
// Example string: 'webmaster'
// Expected Output: 'abeemrstw'

const sortString = (str) => str.split("").sort().join("");

console.log("webmaster -> ", sortString("webmaster"));
