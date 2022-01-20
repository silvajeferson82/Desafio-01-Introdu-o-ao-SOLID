import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ email, name }: IRequest): User {
    const userAlreadyExistis = this.userRepository.findByEmail(email);

    if (userAlreadyExistis) {
      throw new Error("User already exists.");
    }

    const user = this.userRepository.create({ name, email });

    return user;
  }
}

export { CreateUserUseCase };
