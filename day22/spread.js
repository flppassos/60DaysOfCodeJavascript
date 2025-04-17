const estudante2 = {
    nome: 'Felipe Passos', 
    idade: 31, 
    cpf: '12345678900',
    turma: 'Javascript', 
    bolsista: true,
    telefones: ['5538999999999', '5538888888888'],
    enderecos: [{
        rua: 'Rua Argemiro Peixoto', 
        numero: 58,
        complemento: 'Casa'
    },
    {
        rua: 'Avenida L', 
        numero: 143,
        complemento: 'Casa'
    }]
};

function exibeTelefone(telefone1, telefone2) {
    console.log(telefone1);
    console.log(telefone2);
}
// Forma incorreta ou engessada
exibeTelefone(estudante2.telefones[0], estudante2.telefones[1]);
// Forma mais utilizada
exibeTelefone(...estudante2.telefones);
//--------------------------------------

// Montando um novo objeto com informações de um objeto base
// Forma engessada a atribuição das informações
const dadosEnvio = {
    nome: estudante2.nome,
    rua: estudante2.enderecos[0].rua,
    numero: estudante2.enderecos[0].numero,
    complemento: estudante2.enderecos[0].complemento
}
console.log(dadosEnvio);

// Forma mais utilizada
const dadosEnvioEsudante = {
    nome: estudante2.nome,
    ...estudante2.enderecos[0],
}
// Utilizando o spread operator (...) é feito um espalhamento do objeto/array
console.log(dadosEnvioEsudante);

