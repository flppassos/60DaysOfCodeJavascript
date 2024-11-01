// TRABALHANDO COM LOOPS
// ARRAY DE CORES
let cores = ['Azul', 'Vermelho', 'Branco', 'Verde', 'Preto'] ;

// LOOP FOR COM A FORMA TRADICIONAL
for(let n = 0; n < cores.length; n++){
    console.log(`Cor: ${cores[n]}`);
}

// LOOP FOR SENDO ITERADO PELO TAMANHO DO ARRAY
// DESSA FORMA É RETORNADO O INDICE DO ARRAY
for(let i in cores) {
    console.log(`Nome da cor: ${cores[i]}`);
}

// LOOG FOR SENDO ITERADO PELO TAMANHO DO ARRAY
// A VARIÁVEL DENTRO DO FOR PASSA A SER O PRÓPRIO ITEM DO ARRAY
for(let v of cores ) {
    console.log(`Cor detro do array: ${v}`)
}
console.log('---------------------------------------')

// OUTRO EXEMPLO
let estoqueToner = [
    {produto: 'Toner cor preto', qtd: 10},
    {produto: 'Toner cor ciano', qtd: 8},
    {produto: 'Toner cor magenta', qtd: 2},
    {produto: 'Toner cor amarelo', qtd: 3},
]

// LISTANDO O ESTOQUE DE TONERS
// FOR DA FORMA TRADICIONAL
for(let n = 0; n < estoqueToner.length; n++) {
    console.log(`Produto: ${estoqueToner[n].produto} - Estoque: ${estoqueToner[n].qtd}`);
}

// FOR ITERANDO PELA CHAVE DO ARRAY
console.log('--- Lista de produtos: ---');

for(let i in estoqueToner) {
    console.log(`Produto: ${estoqueToner[i].produto}`);
}

// FOR ITERANDO PELO VALOR DOS ITENS NO ARRAY
// A VARIÁVEL DENTRO DO FOR PASSA A SER O PRÓPRIO ITEM DO ARRAY
console.log('--- Estoque dos produtos: ---');

for(v of estoqueToner) {
    console.log(`Quantidade em estoque: ${v.qtd}`)
}

