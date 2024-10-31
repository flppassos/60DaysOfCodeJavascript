/*
Calcule o preço do imóvel
- m2 = 3000
- Se tiver 1 quarto, o m2 é 1x
- Se tiver 2 quartos, o m2 é 1.2x
- Se tiver 3 quartos, o m2 é 1.5x
Uso da função:
*/

function calcularImovel(metragem, quartos) {
    const m2 = 3000;
    let q = quartos;
    let m = metragem;

    if (q >= 3){
        m = (m * 1.5);
    } else if (q === 2){
        m = (m * 1.2);
    }

    return m2 * m;
}

let metragem = 123;
let quartos = 3;
preco = calcularImovel(metragem, quartos);
console.log(`A casa custa R$ ${preco}`);
console.log('------------------------');
