// 1. String Concatenation vs. Addition

console.log(5 + 10); // 15 (number addition)
console.log("5" + 10); // "510" (string concatenation)
console.log(5 + "10"); // "510" (string concatenation)
console.log(5 + 10 + "5"); // "155" (first adds numbers, then concatenates)
console.log("5" + 10 + 5); // "5105" (string concatenation dominates)

// 2. Unary + Operator (Implicit Conversion)

console.log(+"5"); // 5 (string to number conversion)
console.log(+"5.5"); // 5.5
console.log(+true); // 1
console.log(+false); // 0
console.log(+null); // 0
console.log(+undefined); // NaN

// 3. Comparisons Between Strings and Numbers

console.log("10" > "2"); // false (string comparison, compares character codes)
console.log("10" > 2); // true (string converted to number)

// 4. Parsing Numbers from Strings

console.log(parseInt("100px")); // 100
console.log(parseInt("0xF")); // 15 (hexadecimal)
console.log(parseInt("5.99")); // 5 (only integer part)
console.log(parseFloat("5.99")); // 5.99
console.log(parseInt("Hello")); // NaN

// 5. Implicit Type Coercion in == vs. ===

console.log("5" == 5); // true (type conversion happens)
console.log("5" === 5); // false (strict comparison, different types)
console.log("0" == false); // true
console.log(" \t\n" == 0); // true (whitespace converts to 0)

// 6. Weird Behavior with Math Functions

console.log(Math.max("10", "2", "8")); // 10 (strings converted to numbers)
console.log(Math.max("10px", 2, "8")); // NaN (invalid number)
console.log(Math.min(true, false, "5", null)); // 0 (all values converted)

// 7. String Multiplication and Division

console.log("10" * 2); // 20 (string converted to number)
console.log("10" / "2"); // 5 (both converted)
console.log("10px" * 2); // NaN (invalid number)
console.log("5" - 1); // 4 (string converted to number)
console.log("5" + 1); // "51" (concatenation)

// 8. Converting Large Numbers to Scientific Notation

console.log(1e21); // 1e+21 (scientific notation)
console.log(1e3); // 1000
console.log(1e-3); // 0.001
console.log("1e3" * 1); // 1000 (string converted to number)

// 9. Handling NaN in String Operations

console.log(NaN == NaN); // false (NaN is never equal to NaN)
console.log("5" - "hello"); // NaN
console.log("5px" - 3); // NaN
console.log("5" * "hello"); // NaN

// 10. Using toFixed() on Numbers

console.log((0.1 + 0.2).toFixed(2)); // "0.30" (string result)
console.log((5.6789).toFixed(2)); // "5.68"
