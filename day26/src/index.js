const caminhoArquivo = process.argv;
const link = caminhoArquivo[2];

const trataErros = require('./erros/trataErros');
const fs = require("fs");

fs.readFile(link, "utf-8", (error, texto) => {
  try {
    if (error) throw error;
    contaPalavras(texto);
  } catch (erro) {
    trataErros(erro);
  }
});

function contaPalavras(texto) {
  const paragrafos = extraiParagrafos(texto);
  const contagem = paragrafos.flatMap((paragrafo) => {
    if (!paragrafo) return [];
    return verficaPalavrasDuplicadas(paragrafo);
  });

  console.log(contagem);
}

function extraiParagrafos(texto) {
  return texto.toLowerCase().split("\n");
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
