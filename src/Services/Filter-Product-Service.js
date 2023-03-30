import { findProductsByCategory } from '../Repositories/Filter-Product-Repository.js';
import httpStatus from "http-status";

export async function filterCategory(category) {
  const products = await findProductsByCategory(category);
  
  if (products.length === 0) {
    const error = new Error('Nenhum produto encontrado.');
    error.status = httpStatus.NOT_FOUND;
    throw error;
  }
  
  return products;
}