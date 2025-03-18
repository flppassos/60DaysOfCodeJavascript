// Buscando um termo em um array
const alunos = ['Felipe', 'Carlos', 'Bruna', 'Ana', 'Maria'];
const media = [10.4, 6.7, 8.9, 8.7, 9.2];

const lista = [alunos, media];

function exibeNomeENotaAluno (aluno){
    if (lista[0].includes(aluno)){
        // Desestruturando uma lista em JS
        const [alunos, media] = lista;

        let indice = alunos.indexOf(aluno);
        let mediaAluno = media[indice];
        return console.log(`A nota média de ${aluno} foi: ${mediaAluno}`);
    } 
    console.log('Aluno não encontrado');
}

exibeNomeENotaAluno('Felipe');