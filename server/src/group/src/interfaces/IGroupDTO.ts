interface IGroupDTO {
  name: string;
  category: Array<String>;
  subject_label: string;
  level: number;
  token: string;
  is_public: boolean;
  is_default: boolean;
  _owner: string;
  _schedule_list: Array<string>;
}

export { IGroupDTO };