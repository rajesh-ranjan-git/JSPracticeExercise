const arr13 = [0, null, undefined, NaN, 1, "hello"];

console.log(
  arr13.filter(
    (item) => item !== null && item !== undefined && !Number.isNaN(item)
  )
);
