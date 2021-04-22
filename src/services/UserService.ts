import { getCustomRepository, Repository } from 'typeorm';
import { User } from '../entities/User';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  private userRepository: Repository<User>;

  constructor() {
    this.userRepository = getCustomRepository(UserRepository);
  }

  async create(email: string) {
    const userAlreadyExists = await this.userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = this.userRepository.create({
      email,
    });

    await this.userRepository.save(user);

    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findOne({
      email,
    });

    return user;
  }
}
