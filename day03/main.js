 //TRABALHANDO COM ARRAY
 let colors = ['blue', 'red', 'green'];
 let idades = [20, 21, 35, 18];
 let lista = ['Felipe', 'Bruna', ['Rua A', 'Rua B']]

 console.log(colors);
 console.log(idades);
 console.log(lista[2][0]);


 let ingredientes = [
    'agua',
    'farinha',
    'ovo',
    'manteiga',
    'sal'
 ];

 // TAMANHO DO ARRAY .length
 let tamanhoArray = ingredientes.length;
 console.log(`Total de ingredientes: ${tamanhoArray}`);

 //ADICIONANDO UM ITEM AO ARRAY .push(item)
 ingredientes.push('oleo');
 console.log(ingredientes);

 // REMOVENDO O ÚLTIMO ITEM DO ARRAY .pop()
 ingredientes.pop();
 console.log(ingredientes);

 // REMOVENDO O PRIMEIRO ITEM DO ARRAY .shift()
 ingredientes.shift();
 console.log(ingredientes);