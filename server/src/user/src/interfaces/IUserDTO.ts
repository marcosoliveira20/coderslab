interface IUserDTO {
  _id?: string;
  username: string;
  name: string;
  last_name: string;
  email: string;
  discord_id: string;
  github_id: string;
  password: string;
  token?: string;
  interest_list?: Array<object>;
}

export { IUserDTO };