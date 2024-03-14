/* The following exercise contains the following subjects:
● reduce method
Instructions
Write the following functions using the reduce built-in function.
1. max
2. the sum of even numbers
3. average*/

function average(arr) {
    if (arr.length === 0) {
        return "invalid";
    }
    const sum = arr.reduce((acc, elem) => acc + elem, 0);
    return sum / arr.length;
}

function max(arr){
    if (arr.length === 0) {
        return "invalid";
    }
    const max = arr.reduce((max, elem) => {
        return (elem > max) ? elem : max;
    }, arr[0]);
    return max
}

function sumOfEven(arr){
    if (arr.length === 0) {
        return "invalid";
    }
    const sum = arr.reduce((sum, elem) => {
        return (elem % 2 == 0) ? sum + elem : sum;
    }, 0);
    return sum
}

const numbers = [1, 2, 3, 4, 5];
console.log(average(numbers))
console.log(max(numbers))
console.log(sumOfEven(numbers))


