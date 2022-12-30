// question 1: write a sum function
// console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"])); // 1512
// console.log(sumArr(["asdasd"])); // 0
// console.log(sumArr(["asdasd12"])); // 12
// console.log(sumArr(["12"])); // 12

const sumArr = (params) => {
  let numbers = 0;
  params.map((item) => {
    const splitArr = item.split("");
    let tempVal = "";
    splitArr.map((val) => {
      const charVal = val.charCodeAt(0);
      if (charVal >= 49 && charVal <= 57) {
        tempVal += val;
      } else {
        numbers += tempVal !== "" ? parseInt(tempVal) : 0;
        tempVal = "";
      }
    });
    numbers += tempVal !== "" ? (parseInt(tempVal) ? parseInt(tempVal) : 0) : 0;
  });
  return numbers;
};

console.log(sumArr(["123f", "1dsa12", "1212ds", "65fd", "sadfa", "asdasd"]));
// console.log(sumArr(["12a"]));
//# sourceURL=snippet:///Script%20snippet%20%231
