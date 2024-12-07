// Given a year, report if it is a leap year.

const checkLeapYear = (year) =>
  year % 4 === 0 ? `${year} is a leap year.` : `${year} is not a leap year.`;

console.log(checkLeapYear(2023));
