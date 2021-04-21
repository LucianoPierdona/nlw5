import { Request, Response } from 'express';

export class UserController {
  async create(req: Request, res: Response) {
    const { email } = req.body;
  }
}
