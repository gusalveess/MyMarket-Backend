import db from "../Config/database.js";

export async function findProdutosByName(name) {
  return await db.collection("produtos").find({ name: name }).toArray();
}

export async function findProdutosByNameSubstring(substring) {
  return await db
    .collection("produtos")
    .find({ name: { $regex: `.*${substring}.*` } })
    .toArray();
}

export async function findProdutosByNameStartsWith(substring) {
  return await db
    .collection("produtos")
    .find({ name: { $regex: `^${substring}` } })
    .toArray();
}

export async function findAllProdutos() {
  return await db.collection("produtos").find().toArray();
}
