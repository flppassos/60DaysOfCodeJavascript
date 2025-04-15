//-- EXERCÍCIOS
//- 1
const pessoa = {
    nome: 'Maria',
    idade: 2,
    solteiro: true,
    hobbies: ['Cantar', 'Assistir desenho', 'Brincar']
}

function mostrarInfoPessoa1 (obj){
    return `Nome: ${obj.nome} - Tipo: ${typeof(obj.nome)}
            Idade: ${obj.idade} - Tipo: ${typeof(obj.idade)}
            Solteiro: ${obj.solteiro} - Tipo: ${typeof(obj.solteiro)}
            Hobbies: ${obj.hobbies.toString()} - Tipo: ${typeof(obj.hobbies)}`
}

console.log(mostrarInfoPessoa1(pessoa));

//- 2
pessoa.endereco = {
    rua: 'Rua Bebefin',
    numero: 44,
    estado: 'Feliz'
}

function mostrarInfoPessoa2 (obj){
    return `Nome: ${obj.nome} - Tipo: ${typeof(obj.nome)}
            Idade: ${obj.idade} - Tipo: ${typeof(obj.idade)}
            Solteiro: ${obj.solteiro} - Tipo: ${typeof(obj.solteiro)}
            Endereco: ${obj.endereco.rua}, ${obj.endereco.numero} - ${obj.endereco.estado}
            Hobbies: ${obj.hobbies.toString()} - Tipo: ${typeof(obj.hobbies)}`
}

console.log(mostrarInfoPessoa2(pessoa));

//- 3
const pessoas = [{
    nome: 'Fulano',
    idade: 43,
    cidade: 'Porteira'
},
{
    nome: 'Ciclano',
    idade: 18,
    cidade: 'BH'
}];

function mostrarListaPessoasV1 (arr){
    console.log('---- Versão 01 ----');
    for(let i of arr){
        console.log(`Nome: ${i.nome}
                Idade: ${i.idade}
                Cidade: ${i.cidade}`
        )
    }
};

function mostrarListaPessoasV2 (arr){
    console.log('---- Versão 02 ----');
    for(let i = 0; i < arr.length; i++){
        console.log(`Nome: ${arr[i].nome}
                Idade: ${arr[i].idade}
                Cidade: ${arr[i].cidade}`
        )
    }
}

function mostrarListaPessoasV3 (arr){
    console.log('---- Versão 03 ----');
    arr.forEach(element => {
        console.log(`Nome: ${element.nome}
                Idade: ${element.idade}
                Cidade: ${element.cidade}`
        )
    });
}

mostrarListaPessoasV1(pessoas);
mostrarListaPessoasV2(pessoas);
mostrarListaPessoasV3(pessoas);

pessoas.push({
    nome: 'Marcleide',
    idade: 54,
    cidade: 'Brasilia'
});

mostrarListaPessoasV1(pessoas);
mostrarListaPessoasV2(pessoas);
mostrarListaPessoasV3(pessoas);

function filtrarPorCidade (arr, city){
    return arr.filter((element) => {
        return element.cidade === city;
    })
}

console.log(filtrarPorCidade(pessoas, 'Brasilia'));

//- 4
//- 4.a
const calculadora = {
    soma: function (num1, num2){
        return (num1 + num2);
    },
    subtracao: function (num1, num2){
        return (num1 - num2);
    },
    multiplicacao: function(num1, num2){
        return (num1 * num2);
    },
    divisao: function (num1, num2) {
        if (num2 === 0) {
            return 'Não é possível realizar divisão por zero, por favor repita a operação.'
        }
        return (num1 / num2);
    }
}

console.log(calculadora.soma(5,5));
console.log(calculadora.subtracao(12,5));
console.log(calculadora.multiplicacao(3,4));
console.log(calculadora.divisao(8,0));
console.log(calculadora.divisao(8,2));

//- 4.b

const numeros = [4, 8, 10, 9, 5, 3];

calculadora.calcularMedia = function (arr){
    let somaNumeros = arr.reduce((element, acc)=> {
        return element + acc;
    }, 0)

    return somaNumeros / arr.length;
}

//- 4.c
console.log(calculadora.calcularMedia(numeros));

//- 5
const contaBancaria = {
    titular: 'Bruna',
    saldo: 50,
    depositar: function (valor){
        this.saldo += valor;
    },
    sacar: function (valor){
        if (valor > this.saldo) {
            console.log('Operação não permitida, saldo insuficiente.');
        } else {
            this.saldo -= valor;
        }
    }
}

const cliente = {
    nome: 'Bruna',
    conta: contaBancaria
}

function mostrarSaldo (obj){
    return `Cliente: ${obj.nome}\nSaldo: R$ ${obj.conta.saldo}`
}

contaBancaria.depositar(100);
contaBancaria.sacar(200);

console.log(mostrarSaldo(cliente));
