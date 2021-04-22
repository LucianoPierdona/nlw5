import { getCustomRepository, Repository } from 'typeorm';
import { ConnectionRepository } from '../repositories/ConnectionRepository';
import { Connection } from '../entities/Connection';

export class ConnectionService {
  private connectionRepository: Repository<Connection>;

  constructor() {
    this.connectionRepository = getCustomRepository(ConnectionRepository);
  }
}
