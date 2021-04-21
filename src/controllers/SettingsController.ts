import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';

export class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    return res.json('');
  }
}
