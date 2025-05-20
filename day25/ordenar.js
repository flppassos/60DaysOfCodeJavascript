const estudantes = require('./estudantes.json');

//-- Ordenar uma lista utilizando o método de array sort()
function ordenar(lista, propriedade){
    return lista.sort((a, b) => {
        if (a[propriedade] < b[propriedade]){
            return -1;
        }
        if (a[propriedade] > b[propriedade]){
            return 1;
        }
        return 0;
    })
}

//- Salvando o resultado da lista ordenada na variável listaOrdenada
const listaOrdenada = ordenar(estudantes, 'nome');
console.log(listaOrdenada);