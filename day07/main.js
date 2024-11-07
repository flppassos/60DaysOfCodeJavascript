const botao = document.querySelector('#botao1');
const botaoRecomendado = document.querySelector('#botao2');
const botaoAdiciona = document.querySelector('#botao3');

const clicou = () => {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');
    console.log(ul.children); // Retorna os elementos filho do elemento 'ul'
    console.log(ul.innerText); // Retorna em formato de texto o conteúdo do elemento 'ul'
    console.log(ul.innerHTML); // Retorna em formato de HTML o conteúdo do elemento 'ul'

    ul.innerHTML = '<li>Outro item adicionado </li>'; // Substitui o html do elemento 'ul' pelo valor informado;
    ul.innerHTML += '<li>Outro item adicionado </li>'; // Adiciona o conteúdo html preservando o conteúdo anterior do elemento 'ul'
}

// children: Retorna todos os elementos filhos a partir de onde é utilizado 
// innerText: Retorna o texto interno do elemento a qual ele foi utilizado
// innerText = 'valor' - Ao atribuir algum valor ao método, esse valor será substituido ao elemento original.

const clicouRecomendado = () => {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    ul.append('<li>Novo item</li>'); // Dessa forma só é adicionado o texto, e não como tag HTML
    
    let newLi = document.createElement('li');
    newLi.innerHTML = '<strong>Novo item2</strong>';

    ul.append(newLi); // Dessa forma sim, é adicionado o elemento HTML
    ul.prepend(newLi); // Dessa forma sim, é adicionado o elemento HTML
}

// append / appendChild: Adiciona um elemento no final do elemento, sem renderizar todo o html na tela novamente. 
// prepend: Adiciona um elemento no final do elemento, sem renderizar todo o html na tela novamente. 

const adicionaLista = () => {
    const teste = document.querySelector('#teste');
    const ul = teste.querySelector('ul');

    let newUl = document.createElement('ul');

    for(i=0; i<=5; i++){
        let newLi = document.createElement('li');
        newLi.innerHTML = 'Novo item ' + i;
        newUl.append(newLi);
    }

    ul.after(newUl); // Insere a lista depois do elemento ul
    ul.before(newUl); // Insere a lista antes do elemento ul
}

botao.addEventListener('click', clicou);
botaoRecomendado.addEventListener('click', clicouRecomendado);
botaoAdiciona.addEventListener('click', adicionaLista);






