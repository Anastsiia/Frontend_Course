/*Exercise 2: String Manipulation
Write a promise chain that takes a string, converts it to uppercase, 
then reverses it, and finally appends the string "-finished" at the end. 
Log the final result.
Use `then` for every phase*/

function convertToUppercase(string) {
  return new Promise((resolve, reject) => {
    resolve(string.toUpperCase());
  });
}

function reverseString(string) {
  return new Promise((resolve, reject) => {
    resolve(string.split("").reverse().join(""));
  });
}

function appendFinished(string) {
  return new Promise((resolve, reject) => {
    resolve(string + "-finished");
  });
}

let str = "hello";

if (typeof str == "string") {
  convertToUppercase(str)
    .then((result) => {
      console.log("Uppercased:", result);
      return reverseString(result);
    })
    .then((result) => {
      console.log("Reversed:", result);
      return appendFinished(result);
    })
    .then((result) => {
      console.log("Appended '-finished':", result);
    })
    .catch((error) => {
      console.error("An error occurred:", error);
    });
} else {
  console.log("enter valid string");
}
