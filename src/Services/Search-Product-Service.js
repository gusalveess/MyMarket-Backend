import {
  findProdutosByName,
  findAllProdutos,
  findProdutosByNameStartsWith,
  findProdutosByNameSubstring,
} from "../Repositories/Search-Product-Repository.js";

export async function searchProdutos(nome, tipo, nomePesquisa) {
  let produtos;

  if (nome) {
    produtos = await findProdutosByName(nome);
  } else if (tipo === "contem") {
    produtos = findProdutosByNameSubstring(nomePesquisa);
  } else if (tipo === "comeca") {
    produtos = findProdutosByNameStartsWith(nomePesquisa);
  } else {
    // Retorna todos os produtos
    produtos = await findAllProdutos();
  }

  return produtos;
}
