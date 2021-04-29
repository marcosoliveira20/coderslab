interface IGroupDTO {
  name: string;
  category: Array<String>;
  subject: object;
  level: number;
  token: string;
  is_public: boolean;
  _owner: string;
  _user_list: Array<string>;
  _schedule_list: Array<string>;
}

export { IGroupDTO };