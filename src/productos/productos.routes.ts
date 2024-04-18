import express from 'express';
import { ProductController } from './productos.controller';

const productRouter = express.Router();

productRouter.get('/', ProductController.getProducts);

// Ruta para obtener un producto por su ID
productRouter.get('/:id', ProductController.getProductById);



export default productRouter;