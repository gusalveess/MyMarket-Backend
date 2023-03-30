import db from '../Config/database.js';

export async function findProductsByCategory(category) {
  return await db.collection('produtos').find({ category: category }).toArray();
}