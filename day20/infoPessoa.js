//-- EXERCÍCIOS
//- 1
const pessoa = {
    nome: 'Maria',
    idade: 2,
    solteiro: true,
    hobbies: ['Cantar', 'Assistir desenho', 'Brincar']
}

function mostrarInfoPessoa1 (obj){
    return `Nome: ${obj.nome} - Tipo: ${typeof(obj.nome)}
            Idade: ${obj.idade} - Tipo: ${typeof(obj.idade)}
            Solteiro: ${obj.solteiro} - Tipo: ${typeof(obj.solteiro)}
            Hobbies: ${obj.hobbies.toString()} - Tipo: ${typeof(obj.hobbies)}`
}

console.log(mostrarInfoPessoa1(pessoa));

//- 2
pessoa.endereco = {
    rua: 'Rua Bebefin',
    numero: 44,
    estado: 'Feliz'
}

function mostrarInfoPessoa2 (obj){
    return `Nome: ${obj.nome} - Tipo: ${typeof(obj.nome)}
            Idade: ${obj.idade} - Tipo: ${typeof(obj.idade)}
            Solteiro: ${obj.solteiro} - Tipo: ${typeof(obj.solteiro)}
            Endereco: ${obj.endereco.rua}, ${obj.endereco.numero} - ${obj.endereco.estado}
            Hobbies: ${obj.hobbies.toString()} - Tipo: ${typeof(obj.hobbies)}`
}

console.log(mostrarInfoPessoa2(pessoa));