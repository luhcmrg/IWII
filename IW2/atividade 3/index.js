// 3.Crie um script que pergunte 3 números ao usuário, coloque em um array, depois exiba tal array.Modifique os elementos do array de modo a a sequência de números ficar.

function getNumbersFromUser() {
  let numbers = [];
  for (let i = 0; i < 3; i++) {
      let num = prompt(`Digite o número ${i + 1}:`);
      numbers.push(Number(num));
  }
  return numbers;
}

function displayArray(arr, message) {
  console.log(message + arr.join(', '));
}

function main() {
  let numbers = getNumbersFromUser();
  
  displayArray(numbers, "Array original: ");
  numbers.sort((a, b) => a - b);

  displayArray(numbers, "Array ordenado: ");
}
main();
