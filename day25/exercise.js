//------------------- Exercícios ----------------
// 01
const biblioteca = [
  {
    id: 1,
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoPublicacao: 1954,
  },
  {
    id: 2,
    titulo: "Dom Quixote",
    autor: "Miguel de Cervantes",
    anoPublicacao: 1605,
  },
  { id: 3, titulo: "1984", autor: "George Orwell", anoPublicacao: 1949 },
  {
    id: 4,
    titulo: "A paciente silenciosa",
    autor: "Alex Michaelides",
    anoPublicacao: 2019,
  },
  {
    id: 5,
    titulo: "Imperfeitos",
    autor: "Christina Lauren",
    anoPublicacao: 2022,
  },
];

function encontrarLivroPorId(id) {
  return biblioteca.find((element) => element.id === id) || null;
}

console.log(encontrarLivroPorId(3));

// 02
const catalogoFilmes = [
  { id: 1, titulo: "Matrix", diretor: "Lana Wachowski", anoLancamento: 1999 },
  {
    id: 2,
    titulo: "Jurassic Park",
    diretor: "Steven Spielberg",
    anoLancamento: 1993,
  },
  {
    id: 3,
    titulo: "Inception",
    diretor: "Christopher Nolan",
    anoLancamento: 2010,
  },
];

function filtrarFilmesPorAno(ano) {
  return catalogoFilmes.filter((element) => {
    return element.anoLancamento === ano;
  });
}

console.log(filtrarFilmesPorAno(1993));

// 03
const listaProdutos = [
  { id: 1, nome: "Camiseta", preco: 25.99 },
  { id: 2, nome: "Calça Jeans", preco: 49.99 },
  { id: 3, nome: "Tênis", preco: 79.99 },
  { id: 4, nome: "Boné", preco: 15.99 },
];

function filtrarOrdenarProdutosPorPreco(maxPreco) {
  const produtosFiltrados = listaProdutos.filter((element) => {
    return element.preco <= maxPreco;
  });

  return produtosFiltrados.sort((a, b) => {
    if (a.preco < b.preco) return -1;
    if (a.preco > b.preco) return 1;
    return 0;
  });
}

console.log(filtrarOrdenarProdutosPorPreco(50));

// 04
const animais = [
  { id: 1, nome: "Leão", especie: "Felino", idade: 5 },
  { id: 2, nome: "Elefante", especie: "Mamífero", idade: 10 },
  { id: 3, nome: "Pinguim", especie: "Ave", idade: 3 },
];

function ordenarAnimais(comparacao) {
  return animais.sort(comparacao);
}

function compararIdadeCrescente(a, b) {
  if (a.idade < b.idade) return -1;
}

function compararIdadeDecrescente(a, b) {
  if (a.idade > b.idade) return -1;
}

console.log(ordenarAnimais(compararIdadeCrescente));
console.log(ordenarAnimais(compararIdadeDecrescente));

// 05
const departamentos = [
  {
    id: 1,
    nome: "Vendas",
    funcionarios: [
      { id: 101, nome: "Ana", cargo: "Vendedor" },
      { id: 102, nome: "Carlos", cargo: "Gerente de vendas" },
    ],
  },
  {
    id: 2,
    nome: "TI",
    funcionarios: [
      { id: 201, nome: "Maria", cargo: "Desenvolvedor" },
      { id: 202, nome: "João", cargo: "Analista de sistemas" },
    ],
  },
];

function encontrarFuncionarioPorId(matricula) {
  for (let departamento of departamentos) {
    const funcionarioEncontrado = departamento.funcionarios.find(
      (element) => element.id === matricula
    );

    if (funcionarioEncontrado) {
      return funcionarioEncontrado;
    }
  }
  return 'Funcionário não encontrado!';
}

console.log(encontrarFuncionarioPorId(203));
