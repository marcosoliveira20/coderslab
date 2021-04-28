interface IGroupDTO {
  name: string;
  category: Array<String>;
  subject: object;
  is_public: boolean;
  _owner: string;
  _user_list: Array<string>;
  schedule_list: Array<string>;
}

export { IGroupDTO };