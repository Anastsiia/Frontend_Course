/*Exercise 3: Array Filtering and Mapping
Write a function compareToNum that takes a number as an argument 
and returns a Promise
that tests if the value is less than or greater than the value 10 (reject otherwise)*/

function compareToNum({ num, isAboveNum }) {
  return new Promise((resolve, reject) => {
    if (
      typeof num !== "number" ||
      isNaN(num) ||
      isNaN(isAboveNum) ||
      typeof isAboveNum !== "number"
    ) {
      reject("Invalid input");
    } else if (num < isAboveNum) {
      reject(`Number ${num} is less than ${isAboveNum}`);
    } else if (num > isAboveNum) {
      resolve(`Number ${num} is greater than ${isAboveNum}`);
    } else {
      reject(`Number ${num} is equal to ${isAboveNum}`);
    }
  });
}

compareToNum({ num: 10, isAboveNum: 5 }) //will reject
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
compareToNum({ num: 10, isAboveNum: 12 }) //will resolve
  .then((result) => console.log(result))
  .catch((error) => console.log(error));
