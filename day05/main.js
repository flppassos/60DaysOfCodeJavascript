// FUNÇÕES DO ARRAY
// INSTANCIANDO UM ARRAY
let fruits = ['Maça', 'Uva', 'Laranja', 'Banana', 'Graviola'];

// INSERINDO UM ITEM AO ARRAY
fruits.push('Kiwi');

// DELETANDO O ÚLTIMO ITEM DO ARRAY
fruits.pop();

// DELETANDO O PRIMEIRO ITEM DO ARRAY
fruits.shift();

// GERA UMA STRING COM OS ITENS DO ARRAY COM O SEPARADOR QUE FOR DEFINIDO POR PARAMETRO NELE
// EX: 
let frutas = fruits.join(', ');
console.log(frutas);

// INVERTENDO AS POSIÇÕES DO ARRAY - INVERTE DE TRÁS PARA A FRENTE
fruits.reverse();
console.log(fruits);

// ODENANDO OS ITENS NO ARRAY - ORDEM ALFABÉTICA CRESCENTE
fruits.sort();
console.log(fruits);

// ORDENANDO OS ITENS O ARRAY - ORDEM ALFABÉTICA DECRESCENTE
fruits.sort();
fruits.reverse();
console.log(fruits);
console.log('------------------------------------')

// ORDENANDO OBJETOS DENTRO DE UM ARRAY
let cars = [
    {brand: 'Fiat', year: 2022},
    {brand: 'BMW', year: 2018},
    {brand: 'Ferrari', year: 2020}
]

console.log(cars);

// NESSES CASOS O SORT SOZINHO NÃO FUNCIONA, POIS O ARRAY NÃO É DE ITENS PRIMITIVOS, MAS SIM DE OBJETOS
cars.sort();

// É NECESSÁRIO UTILIZAR UMA FUNÇÃO DENTRO DO SORT PARA ORDENAR OS ITENS ATRAVÉS DE UM ATRIBUTO DO OBJETO
// ORDENANDO PELO ATRIBUTO 'YEAR' EM ORDEM CRESCENTE
cars.sort((a, b) => {
    return a.year - b.year;
})

// ORDENANDO PELO ATRIBUTO 'YEAR' EM ORDEM DECRESCENTE
cars.sort((a, b) => {
    return b.year - a.year;
})

console.log(cars);
console.log('------------------------------------')

// OUTRAS FUNÇÕES DE ARRAY
// FUNÇÃO FILTER - FILTRA OS ITENS DO ARRAY DE ACORDO COM UMA CONDIÇÃO E RETORNA UM OUTRO ARRAY
// EX:
let materials = ['Lapis', 'Caderno', 'Tesoura', 'Cola', 'Apontador'];

let bigMaterials = materials.filter((value) => {
    return value.length > 5;
})
// NESSE CASO FILTRAMOS OS ITENS DO ARRAY QUE POSSUI MAIS DO QUE 5 CARACTERES

console.log(bigMaterials);

// FUNÇÃO INCLUDES - VERIFICA SE UM ITEM EXISTE DENTRO DO ARRAY
// EX:
if (materials.includes('Cola')) {
    console.log('Já está na lista de materiais.')
} else {
    console.log('Ainda não foi adicionado a lista de materiais.')
}
