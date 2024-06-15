// 4. Crie um array com os seguintes elementos: 'maçã', 'banana', 'laranja', 'uva', 'manga'.

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'manga']

// 5. Exiba no console o segundo elemento do array.

console.log(frutas[1])

// 6. Exiba no console o último elemento do array sem usar o índice diretamente.
console.log(frutas.pop())

// 7. Usar as propriedade do Array adequado.
// 7.1 Adicione 'abacaxi' no final do array.

frutas.push('abacaxi')

// 7.2 Adicione 'morango' no início do array.
frutas.unshift('morango')

// 7.3 Remova o primeiro elemento do array.
frutas.shift()

// 7.4 Remova o último elemento do array.
frutas.pop()

// 8. Encontre o índice da 'laranja' no array.
frutas.indexOf('laranja')