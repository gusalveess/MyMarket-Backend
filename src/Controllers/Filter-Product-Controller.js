import { filterCategory } from '../Services/Filter-Product-Service.js';

export async function filterCategoryController(req, res) {
  try {
    const { category } = req.params;
    const products = await filterCategory(category);
    
    return res.json(products);
  } catch (error) {
    console.error(error);
    return res.status(error.status || 500).json({ message: error.message || 'Erro ao buscar produtos.' });
  }
}