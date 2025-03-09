// 1. Mixing Strings and Numbers in Arrays

const arr = [1, "2", 3, "4", 5];

console.log(arr.map(Number)); // [1, 2, 3, 4, 5] (strings converted to numbers)
console.log(arr.join(" - ")); // "1 - 2 - 3 - 4 - 5" (array converted to string)
console.log(arr.toString()); // "1,2,3,4,5" (default comma-separated string)
// ✅ map(Number) can be used to convert all elements to numbers.

// 2. Sorting Numbers in an Array (String Sorting Issue)

const numbers = [10, 5, 2, 25];

console.log(numbers.sort()); // [10, 2, 25, 5] (sorted as strings)
console.log(numbers.sort((a, b) => a - b)); // [2, 5, 10, 25] (correct numerical sorting)
// ✅ Default .sort() converts numbers to strings before sorting. Use a compare function for correct numerical sorting.

// 3. Adding an Element to an Array with Gaps

const arr1 = [];
arr1[3] = "hello";

console.log(arr1.length); // 4
console.log(arr1); // [ <3 empty slots>, "hello" ]
// ✅ JavaScript allows creating sparse arrays with missing indexes.

// 4. Type Coercion in includes() vs. indexOf()

const arr2 = [1, "2", 3];

console.log(arr2.includes(2)); // false (strict comparison)
console.log(arr2.indexOf("2")); // 1 (string match found)
console.log(arr2.indexOf(2)); // -1 (not found)
// ✅ .includes() and .indexOf() perform strict comparisons, so 2 (number) is different from "2" (string).

// 5. Using reduce() to Sum Mixed Values

const arr3 = [1, "2", 3, "4", 5];

const sum = arr3.reduce((acc, val) => acc + Number(val), 0);
console.log(sum); // 15 (correct sum)
// ✅ reduce() is great for summing values, but ensure explicit conversion using Number().

// 6. Concatenation vs. Spread Operator

const arr4 = [1, 2, 3];
const arr5 = [4, 5, 6];

console.log(arr4.concat(arr5)); // [1, 2, 3, 4, 5, 6]
console.log([...arr4, ...arr5]); // [1, 2, 3, 4, 5, 6]
console.log([arr4, arr5]); // [[1, 2, 3], [4, 5, 6]] (nested array)
// ✅ The spread operator [...arr1, ...arr2] flattens arrays, while [arr1, arr2] creates a nested array.

// 7. Converting Strings to Arrays and Vice Versa

const str = "12345";
const arr6 = str.split("");
console.log(arr6); // ["1", "2", "3", "4", "5"]

const numArr = arr6.map(Number);
console.log(numArr); // [1, 2, 3, 4, 5]

console.log(numArr.join("-")); // "1-2-3-4-5"
// ✅ .split("") turns a string into an array, .map(Number) converts elements to numbers, and .join("-") converts it back to a string.

// 8. Unexpected Behavior of push() and unshift()

const arr7 = [1, 2, 3];

console.log(arr7.push("4")); // 4 (new length)
console.log(arr7); // [1, 2, 3, "4"]

console.log(arr7.unshift(0)); // 5 (new length)
console.log(arr7); // [0, 1, 2, 3, "4"]
// ✅ push() and unshift() return the new array length, not the updated array.

// 9. Using filter() to Remove Falsy Values

const arr8 = [0, 1, "", null, "hello", undefined, 42, NaN];

const cleanArr = arr8.filter(Boolean);
console.log(cleanArr); // [1, "hello", 42]
// ✅ .filter(Boolean) removes falsy values (0, "", null, undefined, NaN, false).

// 10. Weird Behavior of == vs. === in Arrays

console.log([] == false); // true (empty array coerced to false)
// console.log([] === false); // false (strict comparison)

console.log([1, 2] + [3, 4]); // "1,23,4" (arrays converted to strings and concatenated)
// ✅ The + operator converts arrays to strings before concatenation.

// 11. Flattening a Nested Array

const nestedArr = [1, [2, 3], [4, [5, 6]]];

console.log(nestedArr.flat()); // [1, 2, 3, 4, [5, 6]] (flattens 1 level)
console.log(nestedArr.flat(2)); // [1, 2, 3, 4, 5, 6] (flattens all levels)
console.log(nestedArr.flat(Infinity)); // Full deep flattening
// ✅ .flat() is useful for removing nested arrays.

let res = [];
const flattenArray = (arr) => {
  arr.map((item) => {
    if (Array.isArray(item)) {
      flattenArray(item);
    } else {
      res.push(item);
    }
  });
};

flattenArray(nestedArr);

console.log(res);

// 12. Removing Duplicates from an Array

const arr9 = [1, "2", 2, "3", 3, 3, "3"];

console.log([...new Set(arr9)]); // [1, "2", 2, "3", 3]
// ✅ new Set(arr) removes duplicates but keeps string/number differences.

// 13. Extracting Numbers from a Mixed Array

const arr10 = [1, "hello", 2, "3", "world", 4, "5"];

const numbers1 = arr10.filter((item) => !isNaN(item)).map(Number);
console.log(numbers1); // [1, 2, 3, 4, 5]
// ✅ isNaN(item) helps filter out non-numeric values, and map(Number) ensures conversion.

// 14. Converting an Array of Numbers to a Single Number

const arr11 = [1, 2, 3, 4, 5];

console.log(Number(arr11.join(""))); // 12345
// ✅ .join("") combines array elements into a string, and Number() converts it back to a number.

// 15. Creating an Array with a Specific Length and Filling It

console.log(new Array(5)); // [ <5 empty slots> ]
console.log(Array(5).fill(0)); // [0, 0, 0, 0, 0]
console.log([...Array(5).keys()]); // [0, 1, 2, 3, 4]
// ✅ Array(5).fill(0) initializes an array with default values.
