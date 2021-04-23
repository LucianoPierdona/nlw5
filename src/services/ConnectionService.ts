import { getCustomRepository, Repository } from 'typeorm';
import { ConnectionRepository } from '../repositories/ConnectionRepository';
import { Connection } from '../entities/Connection';

interface ICreateConnection {
  socket_id: string;
  user_id: string;
  admin_id?: string;
  id?: string;
}

export class ConnectionService {
  private connectionRepository: Repository<Connection>;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }

  async create(data: ICreateConnection) {
    const { socket_id, admin_id, user_id, id } = data;

    const connection = this.connectionRepository.create({
      socket_id,
      admin_id,
      id,
      user_id,
    });

    await this.connectionRepository.save(connection);

    return connection;
  }

  async findByUserId(user_id: string) {
    const connection = await this.connectionRepository.findOne({
      user_id,
    });

    return connection;
  }

  async findAllWithoutAdmin() {
    const connections = await this.connectionRepository.find({
      where: {
        admin_id: null,
      },
      relations: ['user'],
    });

    return connections;
  }

  async findBySocket(socket_id: string) {
    const connection = await this.connectionRepository.findOne({
      socket_id,
    });

    return connection;
  }

  async updateAdmin(user_id: string, admin_id: string) {
    return await this.connectionRepository.update({ user_id }, { admin_id });
  }
}
