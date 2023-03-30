import { findProductsByCategory } from '../../src/Repositories/Filter-Product-Repository.js';

describe('Filter Product Repository', () => {

  it('retorna uma lista de produtos de uma categoria existente', async () => {
    const category = 'carnes';
    const result = await findProductsByCategory(category);
    expect(Array.isArray(result)).toBe(true); // verifica se o resultado é um array
    expect(result.length).toBeGreaterThan(0); // verifica se há pelo menos um produto na lista
    expect(result[0]).toHaveProperty('name'); // verifica se o produto tem uma propriedade 'name'
  });

  it('retorna uma lista vazia para uma categoria inexistente', async () => {
    const category = 'categoria inexistente';
    const result = await findProductsByCategory(category);
    expect(Array.isArray(result)).toBe(true); // verifica se o resultado é um array
    expect(result.length).toBe(0); // verifica se a lista está vazia
  });
});