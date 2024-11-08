const inputItem = document.querySelector("#novoItem");
const listaItens = document.querySelector("#listaItens");

const adicionaItem = (e) => {
  if (e.key === "Enter") {
    let newLi = document.createElement("li");
    newLi.innerText = inputItem.value;
    listaItens.append(newLi);
    inputItem.value = "";
  }
};

inputItem.addEventListener("keyup", adicionaItem);
