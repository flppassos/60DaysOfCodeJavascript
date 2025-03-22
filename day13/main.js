const notas = [8, 7.5, 9.2, 6, 5.4];
let somaNotas = 0;

// Trabalhando com for tradicional
for (let i = 0; i < notas.length; i++) {
  somaNotas = somaNotas + notas[i];
  console.log(somaNotas);
}
console.log(`O tamanho do array é: ${notas.length}`);
console.log(`A soma das notas é: ${somaNotas}`);

// ---------------------------------------------------------------

const gols = [2, 5, 3, 8, 9];
let somaGols = 0;

// Trabalhando com for of
for (let gol of gols) {
  somaGols += gol;
  console.log(somaGols);
}
console.log(`O tamanho do array é: ${gols.length}`);
console.log(`A soma das notas é: ${somaGols}`);

// ---------------------------------------------------------------

console.log("---------------------------------------------");
console.log("-----------------Exercícios------------------");
console.log("---------------------------------------------");
// Exercícios
// 1 - Escreva um código que utilize o loop for/of para iterar e imprimir cada elemento de um array.
const serieA = ["Cruzeiro", "Flamengo", "Palmeiras", "Vasco", "Internacional"];

function timesSerieA(array) {
  for (let time of array) {
    console.log(time);
  }
}

timesSerieA(serieA);

// 2 - Crie uma função que receba uma array e imprima no console o número do índice e o elemento.
function exibeArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(`${i} - ${array[i]}`);
  }
}

exibeArray(serieA);

// 3 - Crie uma função que receba uma array de números inteiros e retorne a soma dos elementos.
const idadeDosJogadores = [35, 29, 31, 18, 24, 32, 5, 21];

function somaArray(array) {
  let soma = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  return soma;
}

console.log(`Soma dos itens no array: ${somaArray(idadeDosJogadores)}`);

// 4 - Crie uma função que receba uma array de números inteiros e retorne o menor valor e o maior valor da array, no seguinte formato: 'o menor número é X e o maior número é Y'.
const verificaMenorValorEMaiorValor = (array) => {
  let maiorValor = 0,
    menorValor = 0;

  for (let i = 0; i < array.length; i++) {
    if (array[i] >= maiorValor) {
      maiorValor = array[i];
    }
    if (array[i] <= menorValor) {
      menorValor = array[i];
    }
  }

  console.log(
    `O menor número é ${menorValor} e o maior número é ${maiorValor}.`
  );
};

verificaMenorValorEMaiorValor(idadeDosJogadores);

// 5 - Crie um programa que utilize um laço for para percorrer uma array const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14] e exibir no console apenas os números pares contidos nesse array.
const numeros = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

const exibeNumerosPares = () => {
  let numerosPares = [];
  for (numero of numeros) {
    if (numero % 2 === 0) {
      numerosPares.push(numero);
    }
  }
  console.log("Números pares presentes nesse array:", ...numerosPares);
};

exibeNumerosPares(numeros);

// 6 - Crie um programa que calcule a média dos números presentes em um array utilizando um loop for.
const pontos = [3, 8, 12, 5, 6, 10, 7, 2, 9, 14];

function calculaMedia(array) {
  let soma = 0;
  let media = 0;
  for (let i = 0; i < array.length; i++) {
    soma += array[i];
  }
  media = soma / array.length;
  console.log(`A média dos números presentes no array é: ${media}`);
}

calculaMedia(pontos);
