interface IUserDTO {
  username: string;
  name: string;
  last_name: string;
  email: string;
  discord_id: string;
  github_id: string;
  password: string;
  _interest_list: Array<string>;
  _group_list: Array<string>;
}

export { IUserDTO };