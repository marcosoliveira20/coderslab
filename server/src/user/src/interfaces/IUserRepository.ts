import { IUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IUserDTO): void;
  read(data: IUserDTO) : void;
  
}

export { IUsersRepository };
