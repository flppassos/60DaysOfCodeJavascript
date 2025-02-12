/* Exercícios */

// 1. Um array esparso é um tipo de array no qual a maioria dos elementos tem valores indefinidos. Crie um array esparso e atribua valores a alguns elementos do array (por exemplo, defina valores nos índices 1, 3 e 7). Imprima no console o array e também a informação de comprimento do array.

const arrayEsparso = [,'Maria',,'Alice',,,,'Muniz'];
console.log(arrayEsparso);
console.log('Array de tamanho', arrayEsparso.length);


// 2. Crie um programa em Node.js que inicie com um array cinco elementos e atribua um novo valor para a primeira posição (índice 0) desse array. Em seguida, exiba o array antes e depois da alteração.

const listaCompras = ['Feijão', 'Óleo', 'Açucar', 'Farinha', 'Macarrão'];
console.log('Array antes da alteração', listaCompras);

listaCompras.unshift('Arroz');
console.log('Array após alteração', listaCompras);


// 3. Crie um array vazio chamado meuArray e adicione 3 números inteiros de sua escolha utilizando o método push(). Imprima no console os itens presentes no array para verificar se os números foram adicionados. Em seguida, substitua o primeiro elemento do array (índice 0) pelo dobro do seu valor atual. Imprima no console o array atualizado para verificar a mudança.

const meuArray = [];
meuArray.push(2);
meuArray.push(6);
meuArray.push(10);
console.log(meuArray);

meuArray[0] = meuArray[0] * 2;
console.log(meuArray);


// 4. Desenvolva um programa em Node.js que crie um array vazio e atribua valores a ele utilizando o método push(). Adicione três números inteiros ao array e, em seguida, exiba o array resultante.

// 5. Desenvolva um programa em Node.js que simule uma clínica veterinária. Crie um array vazio chamado clinica que representará a fila de animais na clínica. Em um primeiro momento, simule a chegada de três animais diferentes e exiba a lista de animais no console. Após a exibição, remova os animais da lista um por vez e, por fim, exiba no console o estado final da lista.

const clinica = [];
clinica.push('Cachorro - Kira');
clinica.push('Gato - Lindinha');
clinica.push('Vaca - Mila');

console.log("Agenda da semana:");
for(i in clinica){
    console.log(clinica[i]);
}

clinica.pop();
clinica.pop();
clinica.pop();

console.log("Agenda da semana:");
for(i in clinica){
    console.log(clinica[i]);
}




