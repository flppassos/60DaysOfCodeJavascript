// alert("Primeiro dia com Javascript!");
// console.log("Olá mundo para quem está no console!");

// VARIÁVEIS COM JS
let nome = "Felipe";
let idade = 31;
let cidade = "Pirapora";
let estado = "MG";

console.log("Meu nome é",
    nome, "e tenho",
    idade, "anos.");

console.log("Eu nasci na cidade de", 
    cidade, "que fica no estado de", 
    estado);

// TIPOS DE DADOS
let firstName = "Felipe";           // String
let age = 31;                       // Number
let isApproved = true;              // Boolean
let lista = ["Felipe", 31, true];   // Array
let person = { 
    firstName: "Felipe",
    age: 31,
    isApproved: true
};                                  // Object

console.log(typeof person);

// EXERCÍCIOS
// 1. Crie uma variável para armazenar o nome do carro e atribua o valor "Fusca" a ela. 
// Em seguida, exiba a variável no console.

let car = "Fusca";
console.log(car);

// 2. Crie uma variável para armazenar o preço do bolo, que custa R$ 39,99.
// Em seguida, exiba a variável no console.

let price = 39.99;
console.log("R$", price);


// 3. Corrija o código a seguir para exibir o resultado esperado. 
// let "cidade" = São Paulo 

let city = "São Paulo"
console.log(city);

// TEMPLATE STRING
let name = "Felipe";
let lastName = "Passos";
let fullName = `${name} ${lastName}`;

console.log(fullName);

// CONDICIONAIS
let year = 2024;

if (year > 2019) {
    console.log('Voçê passou por uma pandemia.');
} else {
    console.log('A humanidade passará por aflições.');
};