//-- Trabalhando com o método reduce()
const salaA = [8, 5, 6.7, 9, 7.8, 8];
const salaB = [4.3, 5.9, 9.4, 7.9, 6];
const salaC = [6.7, 7.8, 9.2, 9.4, 7];

// Função para calcular a média das notas de uma sala
function calculaMediaLista(sala) {
    // Utilizamos o método reduce para reduzir o conteúdo do array a um único elemento
    // Nesse caso retornando a soma de todos os elementos. 
    let somaNotas = sala.reduce(function (acumulador, nota) {
        return acumulador + nota;
    }, 0);

    // Calculando a média das notas do array
    let mediaNotas = somaNotas / sala.length;
    return mediaNotas.toFixed(2);
}
console.log(calculaMediaLista(salaA));

// Outra função com o mesmo objetivo, porém com uma escrita mais enxuta
const calculaMedia = (sala) => {
    // Utilizando o método reduce para percorrer todo o array e reduzir a um único elemento
    const somaNotas = sala.reduce((a, nota) => a + nota, 0);
    
    // Calculando a média
    const notaMedia = somaNotas / sala.length;
    return notaMedia.toFixed(2);
}
console.log(calculaMedia(salaB));


