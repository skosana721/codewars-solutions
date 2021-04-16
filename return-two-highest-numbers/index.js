let array = [2, 1, 6, 4, 40, 1, -3];
// solution one

// const findHighestNumbers = (arr) => {
//   let twoHighest = [];
//   twoHighest.push(arr.sort((a, b) => b - a)[0]);
//   twoHighest.push(arr.sort((a, b) => b - a)[1]);
//   return twoHighest;
// };
// findHighestNumbers(array);

// solution two

const returnTwoHighest = (num) => {
  let highest = 0;
  for (let i in num) {
    for (let j = 0; j < i; j++) {
      console.log("passed");
    }
    if (highest < num[i]) {
      highest = num[i];
      if (highest < num[i]) {
        highest = num[i];
      }
    }
    return highest;
  }
};
console.log(returnTwoHighest(array));
