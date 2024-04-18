import express from 'express';
import { sessionProductController } from './sesiones_productos.controller';

const sessionProductRouter = express.Router();

sessionProductRouter.get('/',sessionProductController.getSessionProduct)
sessionProductRouter.get('/:id',sessionProductController.getSessionProductById)

export default sessionProductRouter