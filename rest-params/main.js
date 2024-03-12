function sum(...numbers) {
    return numbers.reduce((accum, num) => accum + num, 0)
}

console.log(sum(5, 5))
console.log(sum(5, 10))
console.log(sum(5, 15))
console.log(sum(5, 5, 25, 30, 55))