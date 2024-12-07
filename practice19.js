// Write a JavaScript program to compare two objects to determine if the first one contains the same properties as the second one (which may also have additional properties). For example, objA and objB are equal (but not equal to objC).

const objA = { a: 1, b: 1, c: 1 };
const objB = { a: 1, b: 1, c: 1 };
const objC = { a: 1, b: 1, d: 1 };

const checkEqualityOfObjects = (obj1, obj2) => {
  if (
    typeof obj1 &&
    typeof obj2 &&
    Object.keys(obj1).length === Object.keys(obj2).length
  ) {
    for (let i = 0; i < Object.keys(obj1).length; i++) {
      if (!(Object.keys(obj1)[i] === Object.keys(obj2)[i])) {
        return `Objects does not have same properties.`;
      }
    }
  } else {
    return `Objects are not comparable.`;
  }
  return `Objects have same properties.`;
};

console.log(checkEqualityOfObjects(objC, objB));
