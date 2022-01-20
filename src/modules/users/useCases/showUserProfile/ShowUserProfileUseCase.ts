import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ShowUserProfileUseCase {
  constructor(private userRepository: IUserRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.userRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export { ShowUserProfileUseCase };
