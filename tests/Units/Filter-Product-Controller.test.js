import { filterCategoryController } from '../../src/Controllers/Filter-Product-Controller.js';
import { filterCategory } from '../../src/Services/Filter-Product-Service.js';

jest.mock('../../src/Services/Filter-Product-Service.js');

describe('Filter Product Controller', () => {
  const mockReq = {
    params: {
      category: 'Alimentos',
    },
  };
  const mockRes = {
    json: jest.fn(),
    status: jest.fn().mockReturnThis(),
  };
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return a list of products when successful', async () => {
    const products = [{ name: 'Arroz' }, { name: 'Feijão' }];
    filterCategory.mockResolvedValue(products);

    await filterCategoryController(mockReq, mockRes);

    expect(filterCategory).toHaveBeenCalledWith(mockReq.params.category);
    expect(mockRes.status).not.toHaveBeenCalled();
    expect(mockRes.json).toHaveBeenCalledWith(products);
  });

  it('should return a 404 status when no products are found', async () => {
    const error = new Error('Nenhum produto encontrado.');
    error.status = 404;
    filterCategory.mockRejectedValue(error);

    await filterCategoryController(mockReq, mockRes);

    expect(filterCategory).toHaveBeenCalledWith(mockReq.params.category);
    expect(mockRes.status).toHaveBeenCalledWith(404);
    expect(mockRes.json).toHaveBeenCalledWith({ message: error.message });
  });

  it('should return a 500 status when an unexpected error occurs', async () => {
    const error = new Error('Erro ao buscar produtos.');
    filterCategory.mockRejectedValue(error);

    await filterCategoryController(mockReq, mockRes);

    expect(filterCategory).toHaveBeenCalledWith(mockReq.params.category);
    expect(mockRes.status).toHaveBeenCalledWith(500);
    expect(mockRes.json).toHaveBeenCalledWith({ message: error.message });
  });
});
