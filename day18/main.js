// Criando um objeto em JS
const estudante = {
    nome: 'Felipe', 
    idade: 31,
    cpf: '00000000000', 
    turma: 'Javascript'
};

function exibeObjeto (obj, info) {
    return obj[info];
}

// Acessando a propriedade do objeto de forma variável
console.log(exibeObjeto(estudante, 'nome'));
console.log(exibeObjeto(estudante, 'idade'));

// Acessando a propriedade através da notação .
console.log(estudante.cpf);
console.log(estudante.turma);

// Acessando a propriedade através de colchetes
console.log(estudante['nome']);
console.log(estudante['turma']);

// Acessando uma propriedade inexistente no objeto
console.log(estudante['sexo']);
console.log(estudante['nacionalidade']);

// Inserindo uma nova propriedade no objeto
estudante.escola = 'IFNMG';
console.log(estudante);

// Alterando uma propriedade existente
estudante.idade = 32;
console.log(estudante);

// Deletando uma propriedade do objeto
delete estudante.turma;
console.log(estudante);

