// Write a JavaScript program to convert a comma-separated values (CSV) string to a 2D array. A new line indicates a new row in the array.
// Example input:
// abc,def,ghi
// jkl,mno,pqr
// stu,vwx,yza

const convertTo2D = (str) => {
  const temp = str.split("\n");
  let tempArr = [];
  for (let i = 0; i < temp.length; i++) {
    tempArr.push(temp[i].split(","));
  }
  return tempArr;
};

console.log(convertTo2D("abc,def,ghi\njkl,mno,pqr\nstu,vwx,yza"));
