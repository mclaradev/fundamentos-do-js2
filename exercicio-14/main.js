const average = (...numbers) => {
    const sum = numbers.reduce((accum, num) => accum + num, 0)
    return sum / numbers.length
}

console.log(`A média aritmética simples: ${average(5, 10, 15, 20)}`)

const weightAverage = (...entries) => {
    const sum = entries.reduce((accum, {number, weight}) => accum + (number * weight), 0)
    const weightSum = entries.reduce((accum, entry) => accum + entry.weight, 0)
    return sum / weightSum
}

console.log(`A média aritmética ponderada é: ${weightAverage(
    {number: 5, weight: 3},
    {number: 10, weight: 4},
    {number: 15, weight: 5},
    {number: 20, weight: 6}
    )}`)