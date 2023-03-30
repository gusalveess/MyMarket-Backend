import { searchController } from "../Controllers/Search-Product-Controller.js";
import { Router } from "express";
import { filterCategoryController } from "../Controllers/Filter-Product-Controller.js";

const ProductRouter = Router();

ProductRouter.get('/search', searchController);
ProductRouter.get('/filter/:category', filterCategoryController)

export default ProductRouter