// Exercício 1: Dobrar Valores
// Crie uma função que receba um array de números e retorne um novo array onde cada valor seja o dobro do valor original.

function doubleValues(arr) {
    // Sua implementação aqui
    let doubleArr = [];
    
    for(i of arr) {
        doubleArr.push(i * 2);
    }

    return doubleArr;  
}
  
console.log(doubleValues([1, 2, 3, 4])); // Saída esperada: [2, 4, 6, 8]


// Exercício 2: Filtrar Números Pares
// Escreva uma função que receba um array de números e retorne apenas os números pares.

function filterEvenNumbers(arr) {
    // Sua implementação aqui
    let evenNumbers = [];

    for(i of arr) {
        if (i % 2 == 0) {
            evenNumbers.push(i);
        }
    }

    return evenNumbers;
}
  
console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6])); // Saída esperada: [2, 4, 6]


// Exercício 3: Somar Todos os Valores
// Crie uma função que receba um array de números e retorne a soma de todos os valores.

function sumValues(arr) {
    // Sua implementação aqui
    let sum = 0;

    for(i of arr) {
        sum = sum + i;
    }

    return sum;
}

console.log(sumValues([1, 2, 3, 4])); // Saída esperada: 10


// Exercício 4: Encontrar Maior Número
// Faça uma função que receba um array de números e retorne o maior número encontrado.

function findMax(arr) {
    // Sua implementação aqui
    let maxNumber = 0;

    for(i of arr) {
        if (i > maxNumber) {
            maxNumber = i;
        }
    }

    return maxNumber;
}
  
console.log(findMax([1, 8, 3, 7])); // Saída esperada: 8


// Exercício 5: Converter para String
// Escreva uma função que receba um array de números e retorne uma única string com todos os números /separados por vírgulas.

function arrayToString(arr) {
    // Sua implementação aqui
    let newArray = arr.join(',')

    return newArray;
}
  
console.log(arrayToString([1, 2, 3, 4])); // Saída esperada: "1,2,3,4"


// Exercício 6: Contar Números Maiores que 10
// Crie uma função que receba um array de números e conte quantos desses números são maiores que 10.

function countGreaterThanTen(arr) {
    // Sua implementação aqui
    let count = 0;

    for(i of arr) {
        if (i > 10) {
            count++;
        }
    }

    return count;
}
  
console.log(countGreaterThanTen([4, 12, 15, 3, 8])); // Saída esperada: 2


// Exercício 7: Multiplicar Todos os Valores
// Escreva uma função que receba um array de números e multiplique todos os valores juntos.

function multiplyValues(arr) {
    // Sua implementação aqui
    //let lastItem = 1;
    let total = 1;

    for(i of arr){
        total = i * total
        //lastItem = i;
    }

    return total;
}
  
console.log(multiplyValues([2, 3, 4])); // Saída esperada: 24
  
  