console.error('----------------- Exercícios ----------------');
// 01
//Simulando a criação do arquivo
console.log('Arquivo utilizarRequire.js');
const produtos = require('./dados.json');

console.log(produtos);
console.log('Produto: ', produtos[0].nome);
console.log('Produto: ', produtos[1].nome);
console.log('Produto: ', produtos[2].nome);


// 02
//Simulando a criação do arquivo
console.log('Arquivo lerArquivosJson.js');
const produtos2 = require('./dados.json');

console.log(produtos2);


// 03
const item = {
    id: 5,
    nome: 'Vestildo Longo',
    preco: 229.90
}

const stringItem = JSON.stringify(item);
console.log(stringItem);


// 04
//Simulando a criação do arquivo
console.log('Arquivo manipulacaoJson.js');
const animais = require('./animais.json');

const novoAminal = {
    id: 4,
    nome: 'Baleia',
    tipo: 'Mamífero',
    habitat: 'Oceano'
};
animais.push(novoAminal);

animais[1].habitat = 'Polo Norte';

animais.shift();

const stringAnimais = JSON.stringify(animais);
console.log(stringAnimais);


// 05
const pessoaOriginal = {
    id: 1,
    nome: 'Maria',
    idade: 2
}

function clonaObjeto(obj){
    return JSON.parse(JSON.stringify(obj));
}

const pessoaClone = clonaObjeto(pessoaOriginal);
pessoaClone.sexo = 'Feminino';

console.log(pessoaOriginal);
console.log(pessoaClone);
