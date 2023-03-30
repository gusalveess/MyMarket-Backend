import { filterCategory } from '../../src/Services/Filter-Product-Service.js';
import { findProductsByCategory } from '../../src/Repositories/Filter-Product-Repository.js';
import httpStatus from "http-status";

// Define um mock para a camada de repositório
jest.mock('../../src/Repositories/Filter-Product-Repository.js', () => {
  return {
    findProductsByCategory: jest.fn(),
  };
});

describe('Filter Product Service', () => {
  afterEach(() => {
    jest.resetAllMocks();
  });

  test('Retorna uma lista de produtos de uma categoria existente', async () => {
    const category = 'eletronicos';

    // Define o resultado esperado
    const expectedProducts = [      {        name: 'Smartphone',        price: 1500,        category: 'eletronicos',      },      {        name: 'Tablet',        price: 2000,        category: 'eletronicos',      },    ];

    // Configura o mock da camada de repositório para retornar o resultado esperado
    findProductsByCategory.mockImplementation(() => {
      return expectedProducts;
    });

    // Chama a função do serviço
    const result = await filterCategory(category);

    // Verifica se a função do repositório foi chamada com o argumento correto
    expect(findProductsByCategory).toHaveBeenCalledWith(category);

    // Verifica se a função retornou o resultado esperado
    expect(result).toEqual(expectedProducts);
  });

  test('Retorna um erro 404 se a categoria não existe', async () => {
    const category = 'roupas';

    // Configura o mock da camada de repositório para retornar um array vazio
    findProductsByCategory.mockImplementation(() => {
      return [];
    });

    // Chama a função do serviço
    try {
      await filterCategory(category);
    } catch (error) {
      // Verifica se a função do repositório foi chamada com o argumento correto
      expect(findProductsByCategory).toHaveBeenCalledWith(category);

      // Verifica se o erro foi lançado corretamente
      expect(error.status).toEqual(httpStatus.NOT_FOUND);
      expect(error.message).toEqual('Nenhum produto encontrado.');
    }
  });
});