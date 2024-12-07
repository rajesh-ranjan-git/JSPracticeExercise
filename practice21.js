// Write a JavaScript program to generate a random hexadecimal color code.

const getHex = (num) => {
  switch (num) {
    case "10":
      return "A";
    case "11":
      return "B";
    case "12":
      return "C";
    case "13":
      return "D";
    case "14":
      return "E";
    case "15":
      return "F";
    default:
      return num.toString();
  }
};

const generateRandomHex = () => {
  console.log(
    getHex((Math.random() * 15).toFixed(0)) +
      "" +
      getHex((Math.random() * 15).toFixed(0)) +
      "" +
      getHex((Math.random() * 15).toFixed(0)) +
      "" +
      getHex((Math.random() * 15).toFixed(0)) +
      "" +
      getHex((Math.random() * 15).toFixed(0)) +
      "" +
      getHex((Math.random() * 15).toFixed(0))
  );
};

generateRandomHex();
