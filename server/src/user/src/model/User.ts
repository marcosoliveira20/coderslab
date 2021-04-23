import { IAllUserDTO, IIdUserDTO } from "../interfaces/IUserDTO";
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
  }: IAllUserDTO): { message: string; status: number } {

    const userAlreadyExists = users.findIndex((u) => u.username === username);

    if (userAlreadyExists >= 0) {
      return { message: "User already exists", status: 403 };
    }

    //o id vai ser gerado pelo banco futuramente
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
    username
  } : IIdUserDTO) : { data: object , message: string; status: number } {

    const userAlreadyExists = users.find((u) => u.id === id && u.username === username);

    if (!userAlreadyExists) {
      return { data: {}, message: "User does not exist", status: 404 };
    }
    
    return { data: userAlreadyExists, message: "User exists", status: 201 };
  }

  update({
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
  } : IAllUserDTO) : { data: object , message: string; status: number } {

    const userAlreadyExists = users.find((u) => u.username === username);
    
    if (!userAlreadyExists) {
      return { data: {}, message: "User does not exist", status: 404 };
    }

    userAlreadyExists.name = name;
    userAlreadyExists.last_name = last_name;
    userAlreadyExists.email = email;
    userAlreadyExists.discord_id = discord_id;
    userAlreadyExists.github_id = github_id;
    userAlreadyExists.password = password;
    userAlreadyExists.interst_list = interst_list;
    userAlreadyExists.group_list = group_list;
    
    return { data: userAlreadyExists, message: "User updated", status: 201 };
  }

  delete({
    id,
    username
  } : IIdUserDTO) : { message: string; status: number } {
    
    const userAlreadyExists = users.findIndex((u) => u.id === id && u.username === username);


    if (userAlreadyExists === -1) {
      return { message: "User does not exist", status: 404 };
    }

    users.splice(userAlreadyExists, 1);

    return { message: "User deleted", status: 200 };
  }
}

export { User };
