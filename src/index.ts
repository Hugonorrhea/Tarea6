import { Router } from 'express';
import { GeneroRoutes } from './genero/genero.routes';

export class ApiRoutes {
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  init() {
    const generoRoutes = new GeneroRoutes();
    this.router.use('/generos', generoRoutes.router);
  }
}
