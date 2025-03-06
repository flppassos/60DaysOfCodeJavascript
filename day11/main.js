const listaEstudantes= ['João', 'Bruna', 'Juliana', 'Ana', 'Flávia', 'Fernanda', 'Maria Alice', 'Amanda', 'Karla', 'Cinthia', 'Vanessa', 'Eduarda', 'Beatriz', 'Bianca', 'Caroline', 'Barbara', 'Janaina', 'Mariana', 'Marcia', 'Marisa'];

// Método .slice()
// Divide o array em pedaços, espera-se o parametro de inicio e fim, ambos opcionais.

// Dividir a sala com a primeira metade dos estudades
const sala1 = listaEstudantes.slice(0, (listaEstudantes.length/2));
console.log('Alunos inscritos na sala 01:', sala1);

// Dividir a sala com a segunda metade dos estudantes
const sala2 = listaEstudantes.slice((listaEstudantes.length/2));
console.log('Alunos inscritos na sala 01:', sala2);

// Método .splice()
// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

// No exemplo abaixo o método substituiu 1 valor a partir do indice 3 com o item(ns) que foi incluido no terceiro parametro do método.
listaEstudantes.splice(3, 1, "Luiza"); 
console.log(listaEstudantes);

// Método .concat()
// O método concat() é utilizado para mesclar dois ou mais arrays. Esse método não altera os arrays existentes, mas, em vez disso, retorna um novo array.
const salaJS = ['Evaldo', 'Camis', 'Mauro'];
const salaPython = ['Joquinha', 'Geraldo', 'Jair'];
const salaUnificada = salaJS.concat(salaPython);
console.log(salaUnificada);

// Testando o método com outros tipos de dados.
const conjunto = salaUnificada.concat(true);
console.log(conjunto);

/* Exercícios */
// 1 - Crie uma função que receba dois arrays e os concatene em um único array.

const unificaArrays = (array1, array2) => {
    novoArray = array1.concat(array2);
    return console.log('Retorno da função unificaArrays: ' ,novoArray);
}

unificaArrays(salaJS, salaPython);

// 2 - Crie um array chamado numeros contendo números de 1 a 10. Utilize o método slice para criar um novo array chamado parteNumeros que contenha apenas os números de índice 3 a 7 de numeros.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const parteNumeros = numeros.slice(3, 8);
console.log(parteNumeros);

// 3 - Dado o array frutas contendo frutas que desejamos comprar na feira:
// Utilize o método splice para remover as frutas no índice 2 e 3 e, em seguida, adicione as frutas 'Kiwi' e 'Pêssego' nesses mesmos índices.

const frutas = ['Maçã', 'Banana', 'Laranja', 'Limão', 'Abacaxi'];
frutas.splice(2, 2, 'Kiwi', 'Pêssego');
console.log(frutas);

// 4 - Crie dois arrays chamados menuPrincipal e menuDeSobremesas contendo opções do cardápio de um restaurante. Utilize o método concat para criar um novo array menuCompleto contendo todos os elementos de menuPrincipal seguidos pelos elementos de menuDeSobremesas.

const menuPrincipal = ['Arroz', 'Feijão', 'Batata Frita', 'Vinagrete', 'Carnes'];
const menuDeSobremesas = ['Pave', 'Doce de leite', 'Pudim', 'Manjá'];
const menuCompleto = menuPrincipal.concat(menuDeSobremesas);
console.log(menuCompleto);


// 5 - Crie uma lista bidimensional com 3 linhas e 3 colunas, onde cada elemento seja uma matriz 3x3 com valores iniciando em 1 e aumentando em 1 a cada elemento.
// Dicas:
// comece com um array vazio, por exemplo const matriz = [] e adicione valores nele com push;
// você pode resolver usando um for dentro de outro for.

// 6 - Acesse e imprima o elemento na segunda linha e terceira coluna da lista bidimensional matriz criada no exercício anterior.

//7 - Adicione um novo elemento (por exemplo,15) na terceira linha e segunda coluna da lista bidimensional matriz criada anteriormente.

