const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

const fs = require("fs");

fs.readFile(link, "utf-8", (err, texto) => {
  quebraEmParagrafos(texto);
  // verficaPalavrasDuplicadas(texto);
});

function quebraEmParagrafos(texto) {
  const paragrafos = texto.toLowerCase().split("\n");

  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verficaPalavrasDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function limpaPalavra(palavra) {
  return palavra.replace(/[.,\/!#$%\^&\*;:{}=\-_`~()]/g, "");
}

function verficaPalavrasDuplicadas(texto) {
  const listaPalavras = texto.split(" ");
  const resultado = {};

  listaPalavras.forEach((element) => {
    // Valida se a palavra possui mais do que 3 letras
    if (element.length >= 3) {
      const palavraSemCaracterEspecial = limpaPalavra(element);

      resultado[palavraSemCaracterEspecial] =
        (resultado[palavraSemCaracterEspecial] || 0) + 1;
    }
  });

  return resultado;
}
