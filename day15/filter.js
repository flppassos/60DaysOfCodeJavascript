//-- Trabalhando com filter()
const alunos = ['Maria', 'Fernanda', 'Ana', 'Bruna', 'Felipe'];
const notas = [8, 5, 6, 7, 9];

const aprovados = alunos.filter((element, i) => {
    return notas[i] >= 7;
});

//Exemplo mais didatico
const reprovados = alunos.filter((element, i) => {
    // Condição para que o elemento entre no filtro ou não
    if (notas[i] < 7) {
        return true;
        // Retorna true permitindo o elemento ser filtrado
    } else {
        return false;
        // Retorna false negando o elemento ser filtrado
    }
});

console.log(aprovados);
console.log(reprovados);