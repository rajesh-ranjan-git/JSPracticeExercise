// Write a JavaScript program to find the number of even values up to a given number.

const noOfEvenValues = (num) => {
  const evenArr = [];
  for (let i = 2; i <= num; i += 2) {
    evenArr.push(i);
  }
  return evenArr.length;
};

console.log(noOfEvenValues(46));
