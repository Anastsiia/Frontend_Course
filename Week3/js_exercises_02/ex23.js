/* The following exercise contains the following subjects:
● arrays
● indexOf
Instructions
Create a function that received an array of integers as a
parameter.
Return a new array without any duplicates inside. You
indexOf as part of your solution.
Example:
[3,4,4,3,6,3] --→ [3,4,6]*/

function delDublicate(intArr) {
    const resArr = [];
    for (let i = 0; i < intArr.length; i++) {
        if (resArr.indexOf(intArr[i]) == -1) {
            resArr.push(intArr[i])
        }
    }
    return resArr;
}

const intArr = [3,3,4,4,3,6,3];
console.log(delDublicate(intArr));
