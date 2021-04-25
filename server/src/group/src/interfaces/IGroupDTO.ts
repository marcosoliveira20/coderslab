interface IAllGroupDTO {
  id: string;
  name: string;
  category: object;
  subject: object;
  is_public: boolean;
  user_list: object;
  schedule_list: object;
}

interface IIdGroupDTO {
  id: string;
}

interface INameGroupDTO {
  name: string;
}

export { IAllGroupDTO, IIdGroupDTO, INameGroupDTO };