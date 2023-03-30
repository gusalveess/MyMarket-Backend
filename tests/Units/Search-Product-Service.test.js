import {
    findProdutosByName,
    findAllProdutos,
    findProdutosByNameStartsWith,
    findProdutosByNameSubstring,
  } from "../../src/Repositories/Search-Product-Repository.js";
  import { searchProdutos } from "../../src/Services/Search-Product-Service.js";
  
  // Mocks para as funções do repositório
  jest.mock("../../src/Repositories/Search-Product-Repository.js", () => ({
    findProdutosByName: jest.fn(),
    findAllProdutos: jest.fn(),
    findProdutosByNameStartsWith: jest.fn(),
    findProdutosByNameSubstring: jest.fn(),
  }));
  
  describe("Search Product Service", () => {
    afterEach(() => {
      jest.clearAllMocks();
    });
  
    it("should call findProdutosByName with the correct parameter", async () => {
      const nome = "Presunto";
      await searchProdutos(nome);
      expect(findProdutosByName).toHaveBeenCalledWith(nome);
    });
  
    it("should call findAllProdutos when no parameters are given", async () => {
      await searchProdutos();
      expect(findAllProdutos).toHaveBeenCalled();
    });
  
    it("should call findProdutosByNameSubstring with the correct parameter when tipo is 'contem'", async () => {
      const nomePesquisa = "Pres";
      await searchProdutos(null, "contem", nomePesquisa);
      expect(findProdutosByNameSubstring).toHaveBeenCalledWith(nomePesquisa);
    });
  
    it("should call findProdutosByNameStartsWith with the correct parameter when tipo is 'comeca'", async () => {
      const nomePesquisa = "Pre";
      await searchProdutos(null, "comeca", nomePesquisa);
      expect(findProdutosByNameStartsWith).toHaveBeenCalledWith(nomePesquisa);
    });
  });