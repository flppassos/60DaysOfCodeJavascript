const botao = document.querySelector("#botao");
const input = document.querySelector("input");
const inputNome = document.querySelector(".nome");

const clicou = () => {
  // Pegando o valor do atributo type
  console.log(input.getAttribute("type"));

  // Verificando se o elemento possui um tipo de atributo
  if (input.hasAttribute("placeholder")) {
    console.log("O elemento possui placeholder sim");
  } else {
    console.log("O elemento não possui placeholder");
  }

  // Alterando um atributo do elemento, se não existir ele inclui o atributo
  input.setAttribute("name", "senha");

  if (input.getAttribute("type") === "password") {
    input.setAttribute("type", "text");
    botao.innerText = "Ocultar senha";
  } else {
    input.setAttribute("type", "password");
    botao.innerText = "Mostrar senha";
  }
};

const apertou = () => {
    console.log('Apertou');
}

const segurou = () => {
    console.log('Segurou');
}

const soltou = () => {
    console.log('Soltou');
}

inputNome.addEventListener("keyup", soltou);
