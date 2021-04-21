import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { SettingsService } from '../services/SettingsService';

export class SettingsController {
  async create(req: Request, res: Response) {
    const { chat, username } = req.body;

    const settingsService = new SettingsService();

    const settings = await settingsService.create({ chat, username });

    return res.json(settings);
  }
}
