class Person {

    // Atributos ou variáveis do escopo da classe
    _age = 0;
    steps = 0;

    // Construtor da classe - Será executado no momento em que a classe for instanciada.
    constructor(name){
        this.name = name;
    }

    // Método de classe
    makeAStep(){
        this.steps++;
    }

    // Para utilizar o conceito 'getter' utiliza-se a palavra reservada 'get'
    // Esse método não pode conter nenhum parâmetro
    get age(){
        return this._age;    
    }

    // Para utilizar o conceito 'setter' utiliza-se a palavra reservada 'set'
    // Esse método deve existir um único parâmetro
    set age(newAge){
        if (typeof newAge == 'number') {
            this._age = newAge;
        }
    }
}

// Conceito de Herança, utiliza-se a palavra reservada 'extends'
class Student extends Person {
    constructor(name, matricula) {
        // A palavra reservada 'super' indica referencia a classe pai, ou seja, a classe que está sendo extendida. Nesse caso o atributo name está vindo da classe Person.
        super(name); 
        this.matricula = matricula;
    }
}

// Instanciando uma classe em uma variável
let p1 = new Person('Felipe');

// Executando um método de classe
p1.makeAStep();
p1.makeAStep();

// Utilizando o setter 'set' da classe, a atribuição do valor é como se estivesse passando um valor para uma variável
p1.age = 28;

console.log(`${p1.name} tem ${p1.age} anos. Número de passos: ${p1.steps}`);

let estudante = new Student('Maria', 22);
console.log(estudante);
