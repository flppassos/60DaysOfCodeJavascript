// CONDICIONAIS && E ||
let idade = 31;

if (idade >= 18 && idade < 60) {
    console.log('Voce é um adulto!')
}
if (idade < 17 || idade > 60) {
    console.log('Voce não é um adulto!')
}

// CONDICIONAL DUPLA
if (idade < 18) {
    console.log('Felipe é uma criança!')
} else if (idade >= 18 && idade < 60) {
    console.log('Felipe é um adulto!')
} else if (idade >= 60) {
    console.log('Felipe é um idoso!')
}

// CONDICIONAIS TERNÁRIOS
let isMember = false;
let shipping = isMember ? 5 : 15;

let age = 18;
let isAdult = ((age >= 18) ? 'Sim' : 'Não');

console.log(isMember ? 'Voce é membro!' : 'Voce não é membro!');
console.log('Frete: '+shipping);
console.log(isAdult);

//SWITCH
let profession = "policial";

console.log('Profissão: ' + profession);

switch(profession) {
    case 'fiscal' :
        console.log('Sua camisa será AZUL');
        break;
    case 'bombeiro' :
        console.log('Sua camisa será VERMELHA')   ;
        break;
    case 'policial' :
        console.log('Sua camisa será PRETA');
        break;
    default:
        console.log('Sua camisa será BRANCA');
        break;
}

// DECLARANDO FUNÇÕES
function gravidade() {
    console.log('A gravidade da terra é:')
    console.log(9.8)
}

// FUNÇÃO COM PARAMETROS
function nomeCompleto(nome, sobrenome){
    console.log(`${nome} ${sobrenome}`);
}

nomeCompleto("Felipe", "Passos");

// FUNÇÃO COM RETORNO
function somar(n1, n2) {
    let resultado = n1 + n2;
    return resultado;
}

let valorSomado = somar(10, 20);
console.log(valorSomado);

// FUNÇÃO COM RETORNO CONDICIONAL
function maiorDeIdade(idade) {
    if (idade >= 18) {
        return true;
    }else {
        return false;
    }
}
let age2 = 20;
let verificacao = maiorDeIdade(age2);

if (verificacao) {
    console.log('E maior de idade.')
} else {
    console.log('Não é maior de idade.')
}

// EXERCÍCIO FUNÇÕES
// Calcule a porcentagem entre dois números
function calcPct( x1, x2) {
    result = (x2 / x1) * 100;
    return result;
}

let n1 = 30;
let n2 = 8;
let pct = calcPct(n1, n2);

console.log(`${pct}% de ${n1} é ${n2} `);
