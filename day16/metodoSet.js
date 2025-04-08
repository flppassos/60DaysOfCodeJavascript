//-- O método set cria um objeto ou conjunto de valores únicos e iteráveis. 
// Elementos não podem ser repetidos no Set. Exemplos:

const listaAniversario = ['Felipe', 'Bruna', 'Felipe', 'Maria', 'Maria'];

// Criando um conjunto de valores não repetidos
const listaAtualizada = new Set(listaAniversario);
console.log(listaAtualizada);

// Outra forma de escrita, atribuindo os valores a um array com o spread operator
const listaRevisada = [... new Set(listaAniversario)];
console.log(listaRevisada);


