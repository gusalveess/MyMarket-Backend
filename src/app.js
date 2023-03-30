import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import router from "./Routers/index.js";
import httpStatus from "http-status";

const app = express();
app.use(express.json());
app.use(cors());
app.use(router)
dotenv.config();
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${process.env.PORT}`);
  return httpStatus.OK
});

export default app
