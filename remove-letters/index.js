let array = ["b ", 3, 98, "c", 2, 5, "eat", 11, 7, "car", "string"];

const removeLetters = (arr) => {
  let numberArray = [];
  for (let i of arr) {
    if (typeof i === "number") {
      numberArray.push(i);
    }
  }
  return numberArray;
};
removeLetters(array);
