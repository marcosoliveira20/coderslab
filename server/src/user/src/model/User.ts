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
    interest_list,
    group_list
  }: IUserDTO): { message: string; status: number } {
    const findIndex: number = users.findIndex(u => u.username === username || u.id === id);

    if (findIndex >= 0) {
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
      interest_list,
      group_list,
    });

    return { message: "User created", status: 201 };
  }

  readById(id : string) : { user?: IUserDTO; message?: string; status: number } {

    const user: IUserDTO = users.find(u => u.id === id);

    if (!user) {
      return { message: "User does not exist", status: 404 };
    }
    
    return { user, status: 200 };
  }

  readByUsername(username : string) : { user?: IUserDTO; message?: string; status: number } {

    const user: IUserDTO = users.find(u => u.username === username);

    if (!user) {
      return { message: "User does not exist", status: 404 };
    }
    
    return { user, status: 200 };
  }

  readAll() : { users: Array<IUserDTO>; status: number } {
    if(users.length === 0) {
      return { users, status: 200 };
    }

    return { users, status: 200 };
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
    interest_list,
    group_list
  } : IUserDTO) : { user?: IUserDTO; message?: string; status: number } {

    const user: IUserDTO = users.find(u => u.username === username && u.id === id);
    
    if (!user) {
      return { message: "User does not exist", status: 404 };
    }

    user.name = name;
    user.last_name = last_name;
    user.email = email;
    user.discord_id = discord_id;
    user.github_id = github_id;
    user.password = password;
    user.interest_list = interest_list;
    user.group_list = group_list;
    
    return { user, status: 200 };
  }

  delete(id : string) : { message?: string; status: number } {
    
    const userIndex = users.findIndex(u => u.id === id);

    if (userIndex === -1) {
      return { message: "User does not exist", status: 404 };
    }

    users.splice(userIndex, 1);

    return { status: 204 };
  }
}

export { User };
