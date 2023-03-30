import httpStatus from "http-status";
import { searchProdutos } from "../Services/Search-Product-Service.js";

export async function searchController(req, res) {
  try {
    const { nome, tipo, nomePesquisa } = req.query;

    const produtos = await searchProdutos(nome, tipo, nomePesquisa);

    res.status(httpStatus.OK).json(produtos);
  } catch (err) {
    console.error(err);
    res
      .status(httpStatus.INTERNAL_SERVER_ERROR)
      .json({ message: "Erro ao buscar produtos." });
  }
}
