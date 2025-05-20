const estudantes = require('./estudantes.json');

//---- Trabalhando com find() para encontrar o primeiro objeto na lista que satisfaça a busca
function buscaEstudantePorNome(lista, chave, valor) {
    return lista.find((element) => element[chave] === valor);
}

function buscaEstudantePorTelefone(lista, chave, valor) {
    return lista.find((element) => element[chave].includes(valor));
}

const estudanteEncontrado = buscaEstudantePorNome(estudantes, 'nome', 'Oralle');
console.log(estudanteEncontrado);

const telefoneEncontrado = buscaEstudantePorTelefone(estudantes, 'telefone', '1918820860');
console.log(telefoneEncontrado);

//--- Trabalhando com filter() para econtrar registros na lista que satisfaçam a condição

// Essa função retorna todos os objetos que não possuem a propriedade cep no endereço
function buscaEstudantePorPropriedade(lista, propriedade){
    return lista.filter((element) => {
       return !element.endereco.hasOwnProperty(propriedade);
    });
}

// Salva uma lista de objetos que não possui cep em endereço
const listaEnderecosIncompletos = buscaEstudantePorPropriedade(estudantes, 'cep');
console.log(listaEnderecosIncompletos);