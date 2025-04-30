// Importando um arquivo .json e convertendo em objeto javascript
const estudante = require('./estudante.json');
// import estudante from './estudante.json';

console.log(estudante);
console.log('Tipo: ', typeof estudante);

// Convertendo um objeto javascript em string
const stringEstudante = JSON.stringify(estudante);
console.log(stringEstudante);
console.log('Tipo: ', typeof stringEstudante);

// Convertendo uma string em objeto javascript
const objEstudante = JSON.parse(stringEstudante);
console.log(objEstudante);
console.log('Tipo: ', typeof objEstudante);