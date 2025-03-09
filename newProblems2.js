// 2. Find the missing number from array

const arr = [1, 5, 4, 2, 6];

// arr.sort((a, b) => a - b);

// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] !== i + 1) {
//     console.log(i + 1);
//     break;
//   }
// }

const n = 6;
const sum = n * ((n + 1) / 2);
let arrSum = 0;

for (let i = 0; i < arr.length; i++) {
  arrSum += arr[i];
}
console.log(sum - arrSum);
