/*
Crie uma função que valide usuário e senha.
Usuário correto: pedro
Senha correta: 123
*/

//Uso da função:
function validar(user, pass) {
    const correctUser = 'pedro';
    const correctPass = 123;

    if (user === correctUser && pass === correctPass){
        return true;
    } else {
        return false;
    }
}

let usuario = 'pedro';
let senha = 123;
let validacao = validar(usuario, senha);

if (validacao) {
    console.log('Acesso concedido.');
} else {
    console.log('Acesso NEGADO!');
}