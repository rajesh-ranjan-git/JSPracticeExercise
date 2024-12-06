// Write a JavaScript program to check whether a given array of integers is sorted in ascending order.

const arr = [3, 32, 6, 75, 23, 45, 636];

const checkIfSortedAscending = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    if (arr[i - 1] > arr[i]) {
      return "Array is not sorted in Ascending order.";
    }
  }
  return "Array is sorted in Ascending order.";
};

console.log(checkIfSortedAscending(arr));
console.log(checkIfSortedAscending(arr.sort((a, b) => a - b)));
