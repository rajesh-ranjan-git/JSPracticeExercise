// Write a JavaScript function that returns true if the provided predicate function returns true for all elements in a collection, false otherwise.

const predicateFunc = (value) => (value ? true : false);

const mainFunc = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (!predicateFunc(arr[i])) {
      return false;
    }
  }
  return true;
};

console.log(mainFunc([4, 6, 2, 7, true]));
