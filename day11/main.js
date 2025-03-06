const listaEstudantes= ['João', 'Bruna', 'Juliana', 'Ana', 'Flávia', 'Fernanda', 'Maria Alice', 'Amanda', 'Karla', 'Cinthia', 'Vanessa', 'Eduarda', 'Beatriz', 'Bianca', 'Caroline', 'Barbara', 'Janaina', 'Mariana', 'Marcia', 'Marisa'];

// Método .slice()
// Divide o array em pedaços, espera-se o parametro de inicio e fim, ambos opcionais.

// Dividir a sala com a primeira metade dos estudades
const sala1 = listaEstudantes.slice(0, (listaEstudantes.length/2));
console.log('Alunos inscritos na sala 01:', sala1);

// Dividir a sala com a segunda metade dos estudantes
const sala2 = listaEstudantes.slice((listaEstudantes.length/2));
console.log('Alunos inscritos na sala 01:', sala2);

//Método .splice()
// O método splice() altera o conteúdo de uma lista, adicionando novos elementos enquanto remove elementos antigos.

listaEstudantes.splice(3, 1, "Luiza"); 
//No exmplo acima o método substituiu 1 valor a partir do indice 3 com o item(ns) que foi incluido no terceiro parametro do método.

console.log(listaEstudantes);