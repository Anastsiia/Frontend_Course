const num = [2, 3, 6, 9];

function sumArray(array) {
    return array.reduce((acc, num) => acc + num, 0)
}
console.log(sumArray(num))

function sumArray2(array) {
    let res = 0
    for (let index = 0; index < array.length; index++) {
        res += array[index]
    }
    return res
}
console.log(sumArray2(num)) 