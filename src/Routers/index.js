import { Router } from "express";
import ProductRouter from "./ProductRouter.js";

const router = Router();
router.use(ProductRouter)

export default router;