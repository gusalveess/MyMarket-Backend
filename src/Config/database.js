import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config();

const client = new MongoClient(process.env.MONGO_URI);

async function connect() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (err) {
    console.error(err);
  }
}

connect();

const db = client.db("MarketDB");

export default db