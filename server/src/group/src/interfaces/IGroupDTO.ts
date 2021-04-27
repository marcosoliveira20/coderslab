interface IGroupDTO {
  id: string;
  name: string;
  category: object;
  subject: object;
  is_public: boolean;
  user_list: object;
  schedule_list: object;
}

export { IGroupDTO };