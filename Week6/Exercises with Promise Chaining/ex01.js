/*Exercise 1: Basic Arithmetic Operations
Create a chain of promises to perform and log the result of three arithmetic operations in sequence.
Start with a number, then add 5, multiply by 3, and finally subtract 2.*/

function addFive(num) {
    return new Promise((resolve, reject) => {
        resolve(num + 5);
    });
}

function multiplyByThree(num) {
    return new Promise((resolve, reject) => {
        resolve(num * 3);
    });
}

function subtractTwo(num) {
    return new Promise((resolve, reject) => {
        resolve(num - 2);
    });
}

let num = 10;
if (typeof(num) == "number") {
    console.log("Num: " + num)
addFive(num)
    .then(result => {
        console.log("+5:", result);
        return multiplyByThree(result);
    })
    .then(result => {
        console.log("*3:", result);
        return subtractTwo(result);
    })
    .then(result => {
        console.log("-2:", result);
    })
    .catch(error => {
        console.error("Error:", error);
    });
} else {
    console.log("Enter valid number")
}