import { AppError } from "errors/AppErrors";
import { v4 as uuidv4 } from "uuid";

interface ICreateUser {
  id: string;
  username: string;
  name: string;
  last_name: string;
  email: string;
  discord_id: string;
  github_id: string;
  password: string;
  // TODO - Criar Interst
  interst_list: string;
  // TODO - Criar Group
  group_list: string;
}

export default class User {
  users: Array<ICreateUser> = [];

  createUser({
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
  }: ICreateUser): Array<ICreateUser> {
    const find: number = this.users.findIndex((u) => u.username === username);
    if (find > 0) {
      throw new AppError("Username already exist!", 401);
    }
    this.users = [
      {
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
      },
      ...this.users,
    ];
    return this.users;
  }
}
