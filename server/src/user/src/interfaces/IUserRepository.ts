import { IUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IUserDTO): void;
  readById(_id: string) : Promise<IUserDTO>;
  readByUsername(username: string) : Promise<IUserDTO>;
  readByEmail(email: string) : Promise<IUserDTO>;
  readAll() : Promise<Array<IUserDTO>>;
  update(_id: string, data: IUserDTO) : Promise<IUserDTO>;
  delete(_id: string) : void;
}

export { IUsersRepository };