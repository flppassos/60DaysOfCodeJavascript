const enviar = () => {
    console.log('Enviar dados para o github.')
}

// SELECIONANDO ELEMENTOS
// Formas de selecionar um elemento no DOM

// Selecionando o elemento pelo ID
let titulo = document.getElementById('titulo');
console.log(titulo);

// Selecionando o elemento pela classe css
let data = document.getElementsByClassName('data');
console.log(data);

// Selecionando o elemento pelo nome da Tag
let itensLista = document.getElementsByTagName('li');
console.log(itensLista);

// Utilizando o queryselector
// Dessa forma podemos selecionar elementos estilo css
let subtitulo = document.querySelector('.subtitulo');
console.log(subtitulo);

// Selecionando todos os itens da segunda lista
let itensSegundaLista = document.querySelectorAll('.segundaLista li')
console.log(itensSegundaLista);

// Trabalhando com o click no DOM
// Recebendo o evento click via EventListener

let botao = document.querySelector('.evento');
botao.addEventListener('click', () => {
    enviar();
})