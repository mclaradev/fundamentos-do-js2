const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`A média aritmética simples: ${average(5, 10, 15, 20)}`)