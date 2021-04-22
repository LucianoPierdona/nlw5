import { getCustomRepository } from 'typeorm';
import { UserRepository } from '../repositories/UserRepository';

export class UserService {
  async create(email: string) {
    const userRepository = await getCustomRepository(UserRepository);

    const userAlreadyExists = await userRepository.findOne({ email });

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const user = userRepository.create({
      email,
    });

    await userRepository.save(user);

    return user;
  }
}
