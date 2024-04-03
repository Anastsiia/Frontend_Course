const num = [2, 3, 6]

function getGreater(array, num) {
    const result = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] > num) {
            result.push(array[index])
        }
    }
    return result
}

function getGreater2(array, num){
    return array.filter((value) => value > num)
}

console.log(getGreater(num, 5))
console.log(getGreater2(num, 5))