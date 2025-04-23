//------------------- Exercícios ----------------
// 01
console.error('------------ Exercícios -------------');

const pessoa = {
    nome: 'Felipe',
    notas: [8, 6, 7, 9.5, 7.4],
    calcularMediaNotas: function () {
        let soma = this.notas.reduce((acc, nota) => {
            return acc += nota;
        }, 0);
        let media = soma / this.notas.length;
        return media.toFixed(1);
    },
    classificarDesempenho: function() {
        let media = this.calcularMediaNotas();
        if (media >= 9) {
            return 'Desempenho excelente';
        } else if (media >= 7.6){
            return 'Bom desempenho';
        } else if (media >= 6) {
            return 'Desempenho regular'
        } else {
            return 'Desempenho insuficiente'
        }
    }
}

console.log(`Média: ${pessoa.calcularMediaNotas()}`);
console.log(`Desempenho: ${pessoa.classificarDesempenho()}`);

// 02
const carro = {
    marca: 'Fiat',
    modelo: 'Grand Siena', 
    ano: 2014,
    cor: 'Prata'
}
console.log('--- Propriedades iniciais ---');
for (key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

carro.combustivel = 'Flex';

console.log('--- Propriedades atualizadas ---');
for (key in carro) {
    console.log(`${key}: ${carro[key]}`);
}

// 03
carro.ligado = false;

carro.ligar = function(){
    if (!this.ligado) {
        this.ligado = true;
        console.log('Veículo ligado.')
    } else {
        console.log('Veículo já está ligado.');
    }
};

carro.desligar = function(){
    if (this.ligado) {
        this.ligado = false;
        console.log('Veículo desligado.');
    } else {
        console.log('Veículo já está desligado.');
    }
};

carro.obterDetalhes = function(){
    return `
Marca: ${this.marca}
Modelo: ${this.modelo}
Ano: ${this.ano}
Cor: ${this.cor}
Ligado: ${this.ligado}`
};

carro.ligar();
carro.desligar();
carro.desligar();
carro.ligar();
console.log(carro.obterDetalhes());

// 04
Object.defineProperty(carro, 'placa', {
    value: 'OQY9468',
    enumerable: false,
    writable: false
});

for (key in carro) {
    console.log(`${key}: ${carro[key]}`)
}

let chavesDoObjeto = Object.keys(carro);
console.log(chavesDoObjeto);

console.log(carro.placa);

// 05
const carroNovo = {
    marca: 'GM',
    modelo: 'Cruze', 
    ano: 2021,
    cor: 'Preto'
};

const carroComNovosDetalhes = {
    ...carro,
    ...carroNovo
};

for (key in carroComNovosDetalhes) {
    console.log(`${key}: ${carroComNovosDetalhes[key]}`);
};

carroComNovosDetalhes.ano = 2020;

for (key in carroComNovosDetalhes) {
    console.log(`${key}: ${carroComNovosDetalhes[key]}`);
};


