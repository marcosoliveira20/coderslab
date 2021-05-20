interface IGroupDTO {
  name: string;
  number_members?: number;
  next_schedule?: Date;
  category: Array<String>;
  subject_label: string;
  level: number;
  token: string;
  is_public: boolean;
  is_default: boolean;
  _owner: string;
  _schedule_lis?: Array<object>;
}

export { IGroupDTO };