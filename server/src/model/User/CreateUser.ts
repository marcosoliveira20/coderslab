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

class User {
  users: Array<string> = [];

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
  }: ICreateUser) {
    const find = this.users.find((u) => u.username === username);
    if (!find) {
    }
  }
}
