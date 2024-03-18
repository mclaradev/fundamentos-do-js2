const average = (...numbers) => {
  const sum = numbers.reduce((accum, num) => accum + num, 0);
  return sum / numbers.length;
};

console.log(`A média aritmética simples: ${average(5, 10, 15, 20)}`);

const weightAverage = (...entries) => {
  const sum = entries.reduce(
    (accum, { number, weight }) => accum + number * (weight ?? 1),
    0
  );
  const weightSum = entries.reduce(
    (accum, entry) => accum + (entry.weight ?? 1),
    0
  );
  return sum / weightSum;
};

console.log(
  `A média aritmética ponderada é: ${weightAverage(
    { number: 5, weight: 3 },
    { number: 10, weight: 4 },
    { number: 15 },
    { number: 20, weight: 6 }
  )}`
);

const median = (...numbers) => {
    const orderedNumbers = [...numbers].sort((a, b) => a - b)
    const middle = Math.floor(orderedNumbers.length / 2)
    if (orderedNumbers.length % 2 !== 0){
        return orderedNumbers[middle]
    }
    const firstMedian = orderedNumbers[middle - 1]
    const secondeMedian = orderedNumbers[middle]
    return average(firstMedian, secondeMedian)
}

console.log(`A função Mediana é: ${median(5, 10, 15, 20, 25)}`)