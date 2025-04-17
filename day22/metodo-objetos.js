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

// Métodos principais de objetos
// Object.keys()
// Object.values()
// Object.entries()

const chavesObjeto = Object.keys(estudante); // Esse método retorna um array com as chaves do objeto
if (chavesObjeto.includes('turma')) {
    console.log('O objeto possui a chave turma.')
};

const valoresObjeto = Object.values(estudante); // Esse método retorna um array com os valores do objeto
console.log(valoresObjeto);

const entradasObjeto = Object.entries(estudante); // Esse método retorna um array de arrays com pares de chave-valor do objeto
console.log(entradasObjeto);

