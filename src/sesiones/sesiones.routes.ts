import express from 'express';
import { sessionController } from './sesiones.controller';

const sessionRouter = express.Router();

sessionRouter.get('/',sessionController.getSessions)
sessionRouter.get('/:id',sessionController.getSessionsByID)

export default sessionRouter