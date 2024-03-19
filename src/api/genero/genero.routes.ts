import { Router } from 'express';
import { GeneroController } from './genero.controller';

export class GeneroRoutes {
  router: Router;
  generoController: GeneroController;

  constructor() {
    this.router = Router();
    this.generoController = new GeneroController();
    this.routes();
  }

  routes() {
    this.router.get('/', this.generoController.getGeneros);
  }
}
