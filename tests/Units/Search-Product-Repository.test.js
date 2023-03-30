import db from "../../src/Config/database.js";
import {
  findProdutosByName,
  findProdutosByNameSubstring,
  findProdutosByNameStartsWith,
  findAllProdutos,
} from "../../src/Repositories/Search-Product-Repository.js";

describe("Search Product Repository", () => {

  describe("findProdutosByName", () => {
    it("should return an array of products with matching name", async () => {
      const result = await findProdutosByName("Presunto");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("name", "Presunto");
    });

    it("should return an empty array if no matching name is found", async () => {
      const result = await findProdutosByName("Invalid Name");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
    });
  });

  describe("findProdutosByNameSubstring", () => {
    it("should return an array of products with name containing the given substring", async () => {
      const result = await findProdutosByNameSubstring("Pres");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("name", "Presunto");
    });

    it("should return an empty array if no products contain the given substring in their name", async () => {
      const result = await findProdutosByNameSubstring("invalid");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
    });
  });

  describe("findProdutosByNameStartsWith", () => {
    it("should return an array of products with name starting with the given prefix", async () => {
      const result = await findProdutosByNameStartsWith("Pre");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
      expect(result[0]).toHaveProperty("name", "Presunto");
    });

    it("should return an empty array if no products start with the given prefix", async () => {
      const result = await findProdutosByNameStartsWith("invalid");
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBe(0);
    });
  });

  describe("findAllProdutos", () => {
    it("should return an array of all products", async () => {
      const result = await findAllProdutos();
      expect(result).toBeInstanceOf(Array);
      expect(result.length).toBeGreaterThan(0);
    });
  });
});