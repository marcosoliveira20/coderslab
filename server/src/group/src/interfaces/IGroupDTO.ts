interface IGroupDTO {
  _id?: string;
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
}

export { IGroupDTO };