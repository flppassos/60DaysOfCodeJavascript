//-- Exercícios com array
// 1 - Faça uma função que aceite vários arrays como argumentos e retorne um único array contendo todos os elementos dos arrays fornecidos, utilizando Spread Operator.
// Dica: é possível usar o spread operator diretamente em um parâmetro de função para "espalhar" seu conteúdo, por exemplo function funcaoExemplo(...params).

const listaA = ['Item1', 'Item2', 'Item3'];
const listaB = ['Termo1', 'Termo2', 'Termo3'];

function juntaLista(...params) {
    const arr = [].concat(...params)
    return arr;
}

console.log(juntaLista(listaA, listaB));

// 2 - Crie um array de números chamado valores. Depois,escreva um programa que some todos os elementos deste array utilizando o método reduce.

const valores = [14, 16, 98, 32, 65, 4];

function somarValores(arr) {
    let soma = arr.reduce((acc, current) => {
        return acc + current;
    }, 0);

    return `Valor total: ${soma}`;
}
console.log(somarValores(valores));

// 3 - Considere duas listas de cores:
//Crie um programa que una essas duas listas, removendo cores duplicadas e exiba a lista final.

const coresLista1 = ['Vermelho', 'Verde', 'Azul', 'Amarelo', 'Vermelho'];
const coresLista2 = ['Laranja', 'Verde', 'Roxo', 'Azul'];

function exibeCores(...params) {
    let cores = [].concat(...params);
    let coresUnicas = new Set(cores);
    return [...coresUnicas];
}

console.log(exibeCores(coresLista1, coresLista2));

// 4 - Escreva uma função que receba um array de números e retorne um array contendo apenas os números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12];

function numerosPares(arr) {
    const numerosPares = arr.filter((element)=> {
        return (element % 2 == 0)
    });

    return numerosPares;
}

console.log(numerosPares(numeros));


// 5 - Crie uma função que filtre os números de um array que são múltiplos de 3 e maiores que 5.

const numerosExerc5 = [3, 9, 12, 15, 18, 21];

function multiplos(arr) {
    const numerosMultiplos = arr.filter((element)=> {
        return (element % 3 == 0 && element > 5)
    });

    return numerosMultiplos;
}

console.log(multiplos(numerosExerc5));

// 6 - Crie uma função que receba um array de números e retorne a soma de todos os elementos.

const numerosExerc6 = [32, 45, 228, 60, 43, 4];

function somarValores(arr) {
    let soma = arr.reduce((acc, current) => {
        return acc + current;
    }, 0);

    return `Valor total: ${soma}`;
}
console.log(somarValores(numerosExerc6));