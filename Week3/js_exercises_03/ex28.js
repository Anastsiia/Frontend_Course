/* The following exercise contains the following subjects:
● for loop
Instructions
You are given two arrays:
const food = ["Noodle", "Pasta", "Ice-cream",
"Meat", "Cucumber", "Olives"];
const food1 = ["Fries", "Ice-cream", "Pizza",
"Olives", "Hamburgers"];
Create a function that takes these two arrays as
arguments.
Compare these two arrays using 2 for loops and return the
items that are the same. If none are the same return false.*/

function compareArrs(arr1, arr2) {
    let res = []

    for (let i = 0; i < arr1.length; i++) {
        for (let a = 0; a < arr2.length; a++)
        {
            if (res.includes[arr1[i]]) {
                continue;
            }
            if (arr1[i] == arr2[a]) {
                res.push(arr1[i])
                break;
            }
        }
    }
    return res.length > 0 ? res : false;
}

const food = ["Noodle", "Pasta",  "Meat", "Cucumber", "Olives"];
const food1 = ["Fries",  "Pizza",  "Hamburgers"];

const res = compareArrs(food, food1)

console.log(res);
