import express from "express";
import productController from "../controllers/productController.js";
import auth from "../middlewares/auth.js";

const router = express.Router();

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);

router.post("/",auth, productController.createProduct);

router.put("/",auth, productController.updateProduct);

router.delete("/",auth, productController.deleteProduct);

export default router;