//-- Clonando arrays com spread operator
const listaA = ['TimeA1', 'TimeA2', 'TimeA3'];
const listaB = ['TimeB1', 'TimeB2', 'TimeB3'];

// Dessa forma estamos copiando a referência do array listaA e não seu conteúdo. 
const listaCloneA = listaA;

console.log(listaA);
console.log(listaCloneA);

listaCloneA.push('Time4');

console.log(listaA);
console.log(listaCloneA);
// Mesmo inserindo um elemento no array listaA o array listaCloneA também sofre alteração.
// Para evitar esse comportamento, utilizamos o spread operator. 

let listaCloneB = [...listaB];

console.log(listaB);
console.log(listaCloneB);

listaCloneB = [...listaB, 'TimeB5'];

console.log(listaB);
console.log(listaCloneB);
