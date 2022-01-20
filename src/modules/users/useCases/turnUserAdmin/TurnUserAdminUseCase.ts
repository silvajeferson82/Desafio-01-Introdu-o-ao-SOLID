import { User } from "../../model/User";
import { IUserRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class TurnUserAdminUseCase {
  constructor(private UsersRepository: IUserRepository) {}

  execute({ user_id }: IRequest): User {
    const user = this.UsersRepository.findById(user_id);

    if (!user) {
      throw new Error("User not found");
    }

    const admin = this.UsersRepository.turnAdmin(user);

    return admin;
  }
}

export { TurnUserAdminUseCase };
