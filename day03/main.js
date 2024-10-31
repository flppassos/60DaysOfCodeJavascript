console.log('## TRABALHANDO COM ARRAYS ##');
//TRABALHANDO COM ARRAY
 let colors = ['blue', 'red', 'green'];
 let idades = [20, 21, 35, 18];
 let lista = ['Felipe', 'Bruna', ['Rua A', 'Rua B']]

 console.log(colors);
 console.log(idades);
 console.log(lista[2][0]);

// ARRAY
 let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'manteiga',
    'sal'
 ];

 // TAMANHO DO ARRAY .length
 let tamanhoArray = ingredientes.length;
 console.log(`Total de ingredientes: ${tamanhoArray}`);

 //ADICIONANDO UM ITEM AO ARRAY .push(item)
 ingredientes.push('oleo');
 console.log(ingredientes);

 // REMOVENDO O ÚLTIMO ITEM DO ARRAY .pop()
 ingredientes.pop();
 console.log(ingredientes);

 // REMOVENDO O PRIMEIRO ITEM DO ARRAY .shift()
 ingredientes.shift();
 console.log(ingredientes);

 console.log('## TRABALHANDO COM OBJETOS ##');
// TRABALHANDO COM OBJETOS

// DECLARANDO UM OBJETO
let personagem = {
    nome: 'Felipe',
    idade: 31,
    nacionalidade: 'Brasil',
    carros: [
        {modelo: 'Fiat', cor: 'preto'},
        {modelo: 'Ferrari', cor: 'vermelho'}
    ] // Dentro de um objeto é possível inserir Arrays
}

// ACESSANDO ITENS DO OBJETO
console.log(`${personagem.nome} tem ${personagem.idade} anos.`);
console.log(`Modelo do primeiro carro do ${personagem.nome}: ${personagem.carros[0].modelo}`);
console.log(`A cor da ${personagem.carros[1].modelo} do ${personagem.nome} é: ${personagem.carros[1].cor}`);

// TRABALHANDO COM FUNÇÕES DENTRO DO OBJETO
let pessoa = {
    nome: 'Felipe', 
    sobrenome: 'Passos', 
    idade: 31,
    nomeCompleto: function () {
        return `${this.nome} ${this.sobrenome}`
    },
    /*
    Obs.: Para criar função dentro de um objeto em que seu objetivo, seu escopo, precise acessar um atributo do próprio objeto, é necessário declarar com a palavra reservada 'function' e referenciar o atributo com a keyword this conforme exemplificado acima. 
    */
    profissao: () => {
        return 'Analista'
    }
    /*
    Caso não seja necessário acessar nenhum atributo desse objeto, pode-se criar a função como uma arrow function, ou seja, uma função anônima. Dessa forma o this não irá funcionar, pois a função não tem a referência do objeto.
    */
}

console.log(pessoa.nomeCompleto());
console.log(pessoa.profissao());

console.log('------------------------');