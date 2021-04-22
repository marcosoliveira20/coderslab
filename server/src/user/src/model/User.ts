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
    group_list
  }: IUserDTO): { message: string; status: number } {

    const userAlreadyExists = users.findIndex((u) => u.username === username);

    if (userAlreadyExists >= 0) {
      return { message: "User already exists", status: 403 };
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

    return { message: "User created", status: 200 };
  }

  read({
    id,
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
    interst_list,
    group_list
  } : IUserDTO) : { data: object , message: string; status: number } {

    const userAlreadyExists = users.find((u) => u.username === username);

    if (userAlreadyExists === undefined) {
      return { data: {}, message: "User doesn't exist", status: 404 };
    }
    
    return { data: userAlreadyExists, message: "User exists", status: 201 };
  }
}

export { User };
