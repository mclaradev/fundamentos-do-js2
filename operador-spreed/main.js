const towns = ['Cabedelo', 'João Pessoa', 'Campina Grande', 'Cajá', 'Areia', 'Cajazeiras']

console.log(towns)
console.log(...towns)
console.log(...towns[0])

const townsCopy = towns

townsCopy.pop()
townsCopy.pop()
townsCopy.push('Alagoa Grande')

console.log(townsCopy)