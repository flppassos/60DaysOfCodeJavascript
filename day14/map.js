// Exemplo 01
const notas2 = [10, 4.6, 9.9, 8, 9];

// O map é um método de array que retorna um array de elementos que foram manipulados de um array original. Nesse exemplo, vamos adicionar 1 ponto na nota original.
const notasAtualizadas = notas2.map((element) => {
    return element + 1
});
console.log(notasAtualizadas);

// Forma simplificada de utilizar o map
const notasAtualizadas2 = notas2.map((element) => element + 1);
console.log(notasAtualizadas2);

// Trabalhando com condicionais no método. A nota não pode ser maior do que 10
const notasAtualizadas3 = notas2.map((element) => element + 1 >= 10 ? 10 : element + 1);
console.log(notasAtualizadas3);

// -----------------------------------------
// Exemplo 02
const nomes = ['Ana', 'bIANCA', 'MaRia', 'FeLIPe'];

// Padronizar todos os nomes com caixa alta
const nomesPadronizados = nomes.map((element) => {
    return element.toUpperCase();
});
console.log(nomesPadronizados);

//-------------------------------------------
// Exemplo 03
// Utilize o map() para multiplicar cada um dos valores nesse array por 10 e retornar um novo array com os resultados. Para isso lembre de usar uma função callback.
const arrayNums = [1, 2, 3, 4]

const multiplicadoPorDez = arrayNums.map((element) => {
    return element = element * 10;
})
console.log(multiplicadoPorDez);

// -------------------------------------------
// Exercícios
// 1 - Utilize o método forEach para imprimir cada elemento de um array juntamente com seu índice.
const times = ['Cruzeiro', 'Flamengo', 'Gremio', 'Internacional', 'Vasco'];

times.forEach((element, i) => {
    console.log(`Indice: ${i} - Elemento: ${element}`);
})

// 2 - Crie uma função chamada executaOperacaoEmArray que recebe dois parâmetros: um array e uma função de callback que executa alguma operação matemática. Essa função deve iterar por cada elemento do array e aplicar a função de callback em cada um dos elementos, imprimindo o resultado da operação no console.
const numeros = [2, 4, 9, 6, 5];

function multiplicaPorDois(valor){
    console.log(valor * 2);
}

function executaOperacaoEmArray (array, fn) {
    array.forEach(fn);
}
executaOperacaoEmArray(numeros, multiplicaPorDois);

// 3 - Você recebeu um array numeros contendo valores numéricos. Crie um programa que verifique se um número específico está presente nesse array. Se estiver, o programa deve retornar a posição (índice) desse número. Caso contrário, se o número não estiver presente, o programa deve retornar "-1".
const dezenas = [10, 20, 30, 40, 50];

function buscarNumero (n){
    return dezenas.indexOf(n);
}
console.log(`Indice do número buscado: ${buscarNumero(10)}`);

// 4 - Você recebeu dois arrays de nomes contendo os alunos da Turma A e da Turma B.

/*const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];*/ 

// Utilize o método concat() para unir os arrays das turmas A e B em um único array chamado todasAsTurmas. Depois, utilize o método find() para buscar um aluno específico pelo nome no array todosAlunos. Exiba no console uma mensagem informando o nome do aluno procurado; caso não exista na lista, retorne uma mensagem de aviso, por exemplo Aluno não encontrado.

const nomesTurmaA = [
  'João Silva',
  'Maria Santos',
  'Pedro Almeida'
];

const nomesTurmaB = [
  'Carlos Oliveira',
  'Ana Souza',
  'Lucas Fernandes'
];

const todosAlunos = nomesTurmaA.concat(nomesTurmaB);
const alunoProcurado = todosAlunos.find(nome => nome === 'Ana Souza');

if (alunoProcurado) {
  console.log('Aluno encontrado:', alunoProcurado);
} else {
  console.log('Aluno não encontrado.');
}


// 5 - Considere um array de números inteiros.

// const numeros = [6, 9, 12, 15, 18, 21];

//Utilize o método forEach() para multiplicar cada elemento do array por 3 e exibir no console o resultado de cada multiplicação. Depois, utilize o método findIndex() para encontrar o índice do número 18 no array original.
const numeros2 = [6, 9, 12, 15, 18, 21];

numeros2.forEach((element) => {
    console.log(element * 3);
});

const indiceDoNumero18 = numeros2.findIndex(numero => numero === 18);

if (indiceDoNumero18 !== -1) {
  console.log(`O número 18 está no índice ${indiceDoNumero18}.`);
} else {
  console.log('O número 18 não está presente no array.');
}