//- Iterando uma lista de objetos com for in
const estudante = {
    nome: 'Felipe Passos', 
    idade: 31, 
    cpf: '12345678900',
    turma: 'Javascript', 
    bolsista: true,
    telefones: ['5538999999999', '553899999999'],
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

// Iterando sobre os elementos de um objeto
for (let key in estudante){
    let texto = `A chave ${key}, possui o valor: ${estudante[key]}`
    console.log(texto);
}