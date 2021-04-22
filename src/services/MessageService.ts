import { getCustomRepository, Repository } from 'typeorm';
import { MessageRepository } from '../repositories/MessageRepository';
import { UserRepository } from '../repositories/UserRepository';
import { Message } from '../entities/Message';

interface ICreateMessage {
  admin_id?: string;
  text: string;
  user_id: string;
}

export class MessageService {
  private messageRepository: Repository<Message>;

  constructor() {
    this.messageRepository = getCustomRepository(MessageRepository);
  }

  async create(data: ICreateMessage) {
    const { admin_id, text, user_id } = data;

    const message = this.messageRepository.create({
      admin_id,
      text,
      user_id,
    });

    await this.messageRepository.save(message);

    return message;
  }

  async getMessagesByUser(user_id: string) {
    const list = await this.messageRepository.find({
      where: { user_id },
      relations: ['user'],
    });

    return list;
  }
}
