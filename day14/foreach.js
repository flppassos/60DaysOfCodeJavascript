const notas = [10, 4.6, 7.9, 8, 9];

let somaDasNotas = 0;
let media = 0;

notas.forEach((element) => {
    somaDasNotas += element;
});

media = (somaDasNotas / notas.length);
console.log(`A média das notas é ${media}`);

// A função forEach é um método de array. Ela é executada para cada item presente dentro do array. 
// É considerada uma função ou método callback, ou seja, é uma função que executa outra função anônima. 

// Podemos executar uma função callback de dentro do método forEach ou instânciando ela de forma separada. Ex:

notas.forEach(somaNotas);

function somaNotas (element){
    somaDasNotas += element;
}

console.log(`A soma das notas é: ${somaDasNotas}`);

// Dessa forma, a função somaNotas de dentro do forEach não precisa de ser executada com um parâmetro. Pois esse trabalho é realizado pelo próprio forEach e passa o parâmetro do elemento para a função separada. 