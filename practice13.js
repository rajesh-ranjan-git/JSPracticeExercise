// Write a JavaScript program to find the number of even digits in a an array of integers.

const arr = [3, 32, 6, 75, 23, 45, 636];

const checkEvenDigits = (arr) => {
  const counterArr = arr.map((value) => {
    let counter = 1;
    while (Math.floor(value / 10) !== 0) {
      value /= 10;
      counter++;
    }
    return counter;
  });

  return arr.filter((value, index) => counterArr[index] % 2 === 0);
};

console.log(checkEvenDigits(arr));
