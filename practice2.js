// Write a JavaScript exercise to get the extension of a filename.

// const getExtension = (fileName) =>
//   fileName.substring(fileName.lastIndexOf("."), fileName.length);

const getExtension = (fileName) => fileName.slice(fileName.lastIndexOf("."));

console.log(getExtension("db.config.js"));
