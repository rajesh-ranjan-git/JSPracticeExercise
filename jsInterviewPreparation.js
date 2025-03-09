// 1. Convert an Array of Strings and Numbers to a Single Number
// 📌 Problem:
// Given an array of mixed numbers and string numbers, convert it into a single number.

const arr = [1, "2", 3, "4", 5];
// Output: 12345

const result = Number(arr.map(String).join(""));
console.log(result); // 12345
// ✅ map(String) ensures all elements are strings before joining them.

// 2. Find the Most Frequent Element in an Array
// 📌 Problem:
// Find the most frequent element in a mixed array of numbers and strings.

const arr1 = [1, "2", 3, "2", 3, 3, "4", "4", "4", "4"];
// Output: "4"

const mostFrequent = (arr) => {
  const count = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
};

console.log(mostFrequent(arr1)); // "4"
// ✅ Uses reduce() to count occurrences and Object.keys() to find the highest count.

// 3. Sort an Array Containing Both Numbers and Strings
// 📌 Problem:
// Sort an array containing both numbers and numeric strings in ascending order.

const arr2 = [5, "20", 3, "15", 10];
// Output: [3, 5, 10, "15", "20"]

const sortedArr = arr2.sort((a, b) => a - b);
console.log(sortedArr); // [3, 5, 10, "15", "20"]
// ✅ JavaScript’s .sort() works correctly when numeric sorting is applied.

// 4. Extract Numbers from a Mixed Array and Sort
// 📌 Problem:
// Extract numbers (both string and numeric) from an array, convert them to numbers, and sort in ascending order.

const arr3 = [10, "5", "hello", 20, "15", "world"];
// Output: [5, 10, 15, 20]

const sortedNumbers = arr3
  .filter((item) => !isNaN(item)) // Keep only numeric values
  .map(Number) // Convert to numbers
  .sort((a, b) => a - b); // Sort numerically

console.log(sortedNumbers); // [5, 10, 15, 20]
// ✅ Uses filter(), map(), and sort() to clean and process the array.

// 5. Convert a String of Numbers into an Array
// 📌 Problem:
// Convert a numeric string into an array of individual numbers.

const str = "12345";
// Output: [1, 2, 3, 4, 5]

const numArray = str.split("").map(Number);
console.log(numArray); // [1, 2, 3, 4, 5]
// ✅ .split("") breaks the string, and .map(Number) ensures proper conversion.

// 6. Find the Sum of an Array of Mixed Numbers and Strings
// 📌 Problem:
// Calculate the sum of an array containing both numbers and string numbers.

const arr4 = [1, "2", 3, "4", 5];
// Output: 15

const sum = arr4.reduce((acc, val) => acc + Number(val), 0);
console.log(sum); // 15
// ✅ Number(val) ensures correct summation.

// 7. Remove Duplicates from an Array
// 📌 Problem:
// Remove duplicates while keeping numbers and string versions separate.

const arr5 = [1, "2", 2, "3", 3, 3, "3"];
// Output: [1, "2", 2, "3", 3]

const uniqueArr = [...new Set(arr5)];
console.log(uniqueArr); // [1, "2", 2, "3", 3]
// ✅ Set() removes duplicates but retains type differences.

// 8. Find Pairs That Sum Up to a Given Number
// 📌 Problem:
// Find all pairs in an array that sum to a target number, considering numeric strings.

const arr6 = [1, "2", 3, "4", 5];
const target = 6;
// Output: [[1, "5"], [3, "3"], ["2", 4]]

const findPairs = (arr, target) => {
  let pairs = [];
  let seen = new Set();

  for (let num of arr) {
    let complement = target - Number(num);
    if (seen.has(complement)) {
      pairs.push([num, String(complement)]);
    }
    seen.add(Number(num));
  }

  return pairs;
};

console.log(findPairs(arr6, 6)); // [[1, "5"], [3, "3"], ["2", 4]]
// ✅ Uses a Set for efficient lookup.

// 9. Flatten and Sort a Nested Array
// 📌 Problem:
// Flatten a nested array and sort it, keeping numbers and numeric strings separate.

const arr7 = [1, ["2", 3], [4, ["5", 6]]];
// Output: [1, 3, 4, 6, "2", "5"]

const flattened = arr7.flat(Infinity);
const sorted = flattened.sort((a, b) => Number(a) - Number(b));

console.log(sorted); // [1, 3, 4, 6, "2", "5"]
// ✅ .flat(Infinity) flattens deeply nested arrays.

// 10. Convert an Array of Mixed Values to a Boolean Representation
// 📌 Problem:
// Convert an array of mixed numbers and strings into a Boolean representation (true for non-zero, false otherwise).

const arr8 = [0, "1", 2, "", "hello", null, undefined];
// Output: [false, true, true, false, true, false, false]

const booleanArr = arr8.map(Boolean);
console.log(booleanArr); // [false, true, true, false, true, false, false]
// ✅ Boolean(value) converts truthy values to true and falsy values (0, "", null, undefined, NaN, false) to false.

// Performance-Based Tricks in Arrays
// 1. Fastest Way to Remove Duplicates
// 🚀 Problem:
// Given a large array with numbers and string numbers, remove duplicates efficiently.

// Efficient
const arr9 = [1, "2", 2, "3", 3, 3, "3"];

// Fastest way to remove duplicates (O(n))
const uniqueArr2 = [...new Set(arr9)];

console.log(uniqueArr2); // [1, "2", 2, "3", 3]
// ✅ Set() is faster than using filter() or reduce() because it has O(n) time complexity.

// 2. Fastest Way to Find the Maximum and Minimum
// 🚀 Problem:
// Find the min and max numbers in an array that contains numeric strings and numbers.

// Efficient
const arr10 = [10, "5", 20, "30", 25];

// Convert all elements to numbers and use spread operator
const max = Math.max(...arr.map(Number));
const min = Math.min(...arr.map(Number));

console.log({ max, min }); // { max: 30, min: 5 }
// ✅ .map(Number) ensures all elements are converted before Math.max() and Math.min().

// 3. Large Array Summation Optimization
// 🚀 Problem:
// You have a massive array (1M+ elements). How do you sum it efficiently?

// Efficient
const arr11 = Array(1_000_000).fill(1); // Example: 1M elements

const sum1 = arr11.reduce((acc, val) => acc + val, 0);

console.log(sum1); // 1000000
// ✅ .reduce() is optimized for summing large arrays.

// Edge Cases in Arrays
// 4. Sorting an Array with Mixed Numeric and String Numbers
// 🚀 Problem:
// How do you correctly sort an array that contains numbers and numeric strings?

const arr12 = [10, "5", 2, "20", 8];

// Sort correctly by converting all to numbers
const sortedArr1 = arr12.sort((a, b) => Number(a) - Number(b));

console.log(sortedArr1); // [2, "5", 8, 10, "20"]
// ✅ Converts elements to numbers before sorting to prevent lexicographical sorting.

// 5. Handling null, undefined, and NaN in Arrays
// 🚀 Problem:
// How do you clean an array containing null, undefined, and NaN values?

const arr13 = [0, null, undefined, NaN, 1, "hello"];

const cleanedArr = arr13.filter(
  (item) => item !== null && item !== undefined && !Number.isNaN(item)
);

console.log(cleanedArr); // [0, 1, "hello"]
// ✅ filter() removes unwanted values while keeping valid 0.

// 6. Checking if Two Arrays Contain the Same Elements (Ignoring Order)
// 🚀 Problem:
// Check if two arrays contain the same elements without order mattering.

const arr14 = [1, "2", 3];
const arr15 = ["2", 3, 1];

// Convert to Set and compare
const isEqual = (a, b) => new Set(a).size === new Set([...a, ...b]).size;

console.log(isEqual(arr14, arr15)); // true
// ✅ Uses Set() to check for unordered equality efficiently.

// Real-World Applications
// 7. Convert Query String to Object
// 🚀 Problem:
// Convert a URL query string into a JavaScript object.

const queryString = "name=John&age=25&city=NewYork";

const queryObj = Object.fromEntries(new URLSearchParams(queryString));

console.log(queryObj); // { name: "John", age: "25", city: "NewYork" }
// ✅ URLSearchParams makes parsing query strings easy.

// 8. Convert Object to Query String
// 🚀 Problem:
// Convert an object into a URL query string.

const obj = { name: "John", age: 25, city: "NewYork" };

const queryString1 = new URLSearchParams(obj).toString();

console.log(queryString1); // "name=John&age=25&city=NewYork"
// ✅ Useful for making API requests.

// 9. Find the Longest Word in a Sentence
// 🚀 Problem:
// Find the longest word in a sentence.

const sentence = "JavaScript is the best programming language";

const longestWord = sentence
  .split(" ")
  .reduce(
    (longest, current) => (current.length > longest.length ? current : longest),
    ""
  );

console.log(longestWord); // "programming"
// ✅ Splits sentence into words and finds the longest one.

// 10. Check if a String is a Valid Number
// 🚀 Problem:
// How do you verify if a string is a valid number?

const isValidNumber = (str) => !isNaN(str) && str.trim() !== "";

console.log(isValidNumber("123")); // true
console.log(isValidNumber("  45.67")); // true
console.log(isValidNumber("abc")); // false
console.log(isValidNumber("")); // false
console.log(isValidNumber(" ")); // false
// ✅ isNaN() checks for numbers, and .trim() prevents empty strings.

// More Challenges for You
// If you want more tricky challenges, try solving these:

// 1️⃣ Find all substrings of a given string.
// 2️⃣ Reverse a sentence word-by-word.
// 3️⃣ Find pairs in an array that multiply to a given number.
// 4️⃣ Find the second largest number in an array.
// 5️⃣ Find missing numbers in a given range.

// 🔹 Interview-Style JavaScript Questions
// 1. Find the First Non-Repeating Character in a String
// 📌 Problem: Given a string, find the first non-repeating character and return it. If all characters repeat, return null.

const str1 = "javascript";
// Output: "j"

const firstUniqueChar = (str) => {
  const count = [...str].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});

  return [...str].find((char) => count[char] === 1) || null;
};

console.log(firstUniqueChar("javascript")); // "j"
console.log(firstUniqueChar("aabbcc")); // null
// ✅ Uses reduce() to count occurrences and find() to get the first unique character.
// ✅ Efficient O(n) complexity using a hash map.

// 2. Find Pairs in an Array That Sum to a Target
// 📌 Problem: Given an array of numbers and a target sum, return all unique pairs that add up to the target.

const arr16 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const target1 = 10;
// Output: [[1, 9], [2, 8], [3, 7], [4, 6]]

const findPairs1 = (arr, target) => {
  let pairs = [];
  let seen = new Set();

  for (let num of arr) {
    let complement = target - num;
    if (seen.has(complement)) {
      pairs.push([complement, num]);
    }
    seen.add(num);
  }

  return pairs;
};

console.log(findPairs1(arr16, target1));
// ✅ O(n) complexity using a Set for faster lookup.
// ✅ Avoids duplicate pairs by checking before adding.

// 3. Find Missing Numbers in a Given Range
// 📌 Problem: Given an array of numbers from 1 to N with missing elements, return the missing numbers.

const arr17 = [1, 3, 4, 7, 9];
const n = 10;
// Output: [2, 5, 6, 8, 10]

const findMissingNumbers = (arr, n) => {
  const set = new Set(arr);
  return [...Array(n).keys()].map((i) => i + 1).filter((num) => !set.has(num));
};

console.log(findMissingNumbers(arr17, n));
// ✅ Uses Set for O(1) lookups and Array methods to generate missing values.

// 4. Flatten a Deeply Nested Array Without Using .flat()
// 📌 Problem: Convert a deeply nested array into a single-level array.

const arr18 = [1, [2, [3, [4, 5]]]];
// Output: [1, 2, 3, 4, 5]

// Solution (Recursive):

const flattenArray = (arr) =>
  arr.reduce(
    (acc, val) => acc.concat(Array.isArray(val) ? flattenArray(val) : val),
    []
  );

console.log(flattenArray(arr18));
// ✅ Uses recursion and reduce() for an elegant solution.

// 5. Find the Most Frequent Element in an Array
// 📌 Problem: Find the element that appears the most times in an array.

const arr19 = [3, "apple", 3, "banana", "apple", "apple"];
// Output: "apple"

const mostFrequentElement = (arr) => {
  const count = arr.reduce((acc, val) => {
    acc[val] = (acc[val] || 0) + 1;
    return acc;
  }, {});

  return Object.keys(count).reduce((a, b) => (count[a] > count[b] ? a : b));
};

console.log(mostFrequentElement(arr19));
// ✅ Uses reduce() for efficient counting.

// 6. Find the Longest Word in a Sentence
// 📌 Problem: Return the longest word from a given sentence.

const sentence1 = "JavaScript is a powerful language";
// Output: "JavaScript"

const longestWord1 = (str) =>
  str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );

console.log(longestWord1(sentence1));
// ✅ Uses reduce() to track the longest word.

// 7. Find Duplicate Elements in an Array
// 📌 Problem: Find duplicate values in an array.

const arr20 = [1, 2, 3, 4, 2, 3, 5, 6, 1];
// Output: [1, 2, 3]

const findDuplicates = (arr) => {
  let seen = new Set();
  let duplicates = new Set();

  for (let num of arr) {
    seen.has(num) ? duplicates.add(num) : seen.add(num);
  }

  return [...duplicates];
};

console.log(findDuplicates(arr20));
// ✅ Uses two Sets for optimal performance.

// 8. Reverse Words in a Sentence Without Reversing Characters
// 📌 Problem: Reverse the order of words in a sentence.

const sentence2 = "Hello world from JavaScript";
// Output: "JavaScript from world Hello"

const reverseWords = (str) => str.split(" ").reverse().join(" ");

console.log(reverseWords(sentence2));
// ✅ Uses split(), reverse(), and join() efficiently.

// 9. Implement a Simple Debounce Function
// 📌 Problem: Write a debounce function that prevents excessive function calls.

const debounce = (func, delay) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => func(...args), delay);
  };
};

// Usage
const log = debounce(() => console.log("Called!"), 1000);
log();
log();
log(); // Only logs once after 1 sec
// ✅ Used in real-world scenarios like search inputs.

// 10. Implement a Simple Throttle Function
// 📌 Problem: Limit how often a function can execute.

const throttle = (func, limit) => {
  let lastCall = 0;
  return (...args) => {
    let now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      func(...args);
    }
  };
};

// Usage
const log1 = throttle(() => console.log("Throttled!"), 1000);
log1();
log1();
log1(); // Executes only once per second
// ✅ Used in scroll events and API calls.
