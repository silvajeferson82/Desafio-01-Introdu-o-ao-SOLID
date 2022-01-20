import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ user_id }: IRequest): User[] {
    const user = this.userRepository.findById(user_id);

    if (!user.admin) {
      throw new Error("Only admins can access the list");
    }

    const users = this.userRepository.list();

    return users;
  }
}

export { ListAllUsersUseCase };
