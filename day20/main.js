// Inseriando arrays dentro de objetos
const estudante = {
    nome: 'Felipe Passos', 
    idade: 31, 
    cpf: '12345678900',
    turma: 'Javascript', 
    bolsista: true,
    telefones: ['5538999999999', '553899999999']
};
console.log(estudante.telefones);

// Inserindo objetos dentro de objetos
estudante.endereco = {
    rua: 'Rua Argemiro Peixoto', 
    numero: 58,
    complemento: 'Casa'
};

console.log(estudante);

// Trabalhando com lista de objetos
const professor = {
    nome: 'Geraldo', 
    idade: 43, 
    enderecos: [{
        rua: 'Oliveira neto', 
        numero: 647,
        complemento: 'Casa'
    }],
    telefones: ['5538999999999', '5511999999999'],
    materias: ['Português', 'Matemática']
}

// Inserindo um novo endereço
professor.enderecos.push({
    rua: 'Oscar Paraguaçu',
    numero: 901,
    complemento: ''
});
console.log(professor);

// Exibindo a lista de endereços que possui o complemento
const listaEnderecosComComplemento = professor.enderecos.filter((endereco) => {
    return endereco.complemento
});
console.log(listaEnderecosComComplemento);

// Métodos ou funções de objetos
const aluno = {
    nome: 'Bruna',
    nota: 7.5, 
    estaAprovado: function(notaBase) {
        return this.nota >= notaBase ? true : false
    }
}
console.log(aluno.estaAprovado(7));
