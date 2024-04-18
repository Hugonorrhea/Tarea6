import { Request, Response } from 'express';
import { GeneroService } from './genero.service';
export class GeneroController {
  generoService: GeneroService;

  constructor() {
    this.generoService = new GeneroService();
  }

  async getGeneros(_req: Request, _res: Response) {
  }

}
