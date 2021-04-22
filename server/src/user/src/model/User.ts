import { IUserDTO } from "../interfaces/IUserDTO";
import { IUsersRepository } from "../interfaces/IUserRepository";

const users = [];

class User implements IUsersRepository {
  create({
    id,
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
    interst_list,
    group_list,
  }: IUserDTO): { message: string; status: number } {
    const UserAlreadyExists = users.findIndex((u) => u.username === username);
    
    if (UserAlreadyExists >= 0) {
      return { message: "user already exists", status: 403 };
    }

    users.push({
      id,
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interst_list,
      group_list,
    });

    return { message: "user created", status: 200 };
  }
}

export { User };
