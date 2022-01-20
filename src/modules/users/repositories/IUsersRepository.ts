import { User } from "../model/User";

interface ICreateUserDTO {
  name: string;
  email: string;
}

interface IUserRepository {
  create({ name, email }: ICreateUserDTO): User;
  findById(id: string): User | undefined;
  findByEmail(email: string): User | undefined;
  turnAdmin(user: User): User;
  list(): User[];
}

export { IUserRepository, ICreateUserDTO };
