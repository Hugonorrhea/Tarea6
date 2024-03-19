import { Request, Response } from 'express';
import { GeneroService } from './genero.service';
export class GeneroController {
  generoService: GeneroService;

  constructor() {
    this.generoService = new GeneroService();
  }

  async getGeneros(req: Request, res: Response) {
  }

}
