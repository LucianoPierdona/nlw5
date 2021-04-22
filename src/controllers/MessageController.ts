import { Request, Response } from 'express';
import { MessageService } from '../services/MessageService';

export class MessageController {
  async create(req: Request, res: Response) {
    const { user_id, admin_id, text } = req.body;

    const messageService = new MessageService();

    try {
      const message = await messageService.create({ user_id, admin_id, text });

      return res.json(message);
    } catch (err) {
      return res.status(400).json({ message: err.message });
    }
  }

  async getMessagesByUser(req: Request, res: Response) {
    const { user_id } = req.params;

    const messageService = new MessageService();

    const list = messageService.getMessagesByUser(user_id);

    return res.status(200).json(list);
  }
}
