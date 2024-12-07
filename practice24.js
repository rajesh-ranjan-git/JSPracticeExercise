// Write a JavaScript function to extract unique characters from a string.

const extractUniqueChar = (str) => {
  const temp = [];
  str.split("").filter((s) => {
    if (!temp.includes(s)) {
      temp.push(s);
    }
  });
  return temp;
};

console.log(extractUniqueChar("ranjan"));
