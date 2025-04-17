//------------------- Exercícios ----------------
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


