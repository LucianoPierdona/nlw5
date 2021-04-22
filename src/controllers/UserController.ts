import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

export class UserController {
  async create(req: Request, res: Response) {
    const { email } = req.body;

    const userService = new UserService();

    try {
      const user = await userService.create(email);

      return res.json(user);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }
}
