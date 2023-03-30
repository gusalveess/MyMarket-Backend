import httpStatus from "http-status";
import { searchController } from "../../src/Controllers/Search-Product-Controller.js";
import { searchProdutos } from "../../src/Services/Search-Product-Service.js";

jest.mock("../../src/Services/Search-Product-Service.js");

describe("searchController", () => {
    it("should return products when search is successful", async () => {
      const req = {
        query: {
          nome: "Teste",
          tipo: "comeca",
          nomePesquisa: "T",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const produtos = [{ id: 1, nome: "Teste 1" }, { id: 2, nome: "Teste 2" }];
      searchProdutos.mockResolvedValueOnce(produtos);
  
      await searchController(req, res);
  
      expect(searchProdutos).toHaveBeenCalledWith("Teste", "comeca", "T");
      expect(res.status).toHaveBeenCalledWith(httpStatus.OK);
      expect(res.json).toHaveBeenCalledWith(produtos);
    });
  
    it("should return error message when search fails", async () => {
      const req = {
        query: {
          nome: "",
          tipo: "",
          nomePesquisa: "",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const errorMessage = { message: "Erro ao buscar produtos." };
      searchProdutos.mockRejectedValueOnce(new Error());
  
      await searchController(req, res);
  
      expect(searchProdutos).toHaveBeenCalledWith("", "", "");
      expect(res.status).toHaveBeenCalledWith(httpStatus.INTERNAL_SERVER_ERROR);
      expect(res.json).toHaveBeenCalledWith(errorMessage);
    });
  });