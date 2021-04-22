import { getCustomRepository } from 'typeorm';
import { MessageRepository } from '../repositories/MessageRepository';
import { UserRepository } from '../repositories/UserRepository';

interface ICreateMessage {
  admin_id?: string;
  text: string;
  user_id: string;
}

export class MessageService {
  async create(data: ICreateMessage) {
    const { admin_id, text, user_id } = data;
    const messageRepository = getCustomRepository(MessageRepository);

    const message = messageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await messageRepository.save(message);

    return message;
  }

  async getMessagesByUser(user_id: string) {
    const messageRepository = getCustomRepository(MessageRepository);

    const list = await messageRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}
