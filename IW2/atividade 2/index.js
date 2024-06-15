// 2.Crie uma função que recebe um array de 2 números e coloque eles em ordem crescente.

function sortTwoNumbers(arr) {
    if (arr.length !== 2) {
        throw new Error('O array deve conter exatamente 2 números');
    }
    if (typeof arr[0] !== 'number' || typeof arr[1] !== 'number') {
        throw new Error('Os elementos devem ser números');
    }
    return arr.sort((a, b) => a - b);
}