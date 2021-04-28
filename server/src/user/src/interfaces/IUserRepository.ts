import { IUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IUserDTO): object;
  readById(_id: string) : object;
  readByUsername(username: string) : object;
  readByEmail(email: string) : object;
  readAll() : object;
  update(_id: string, data: IUserDTO) : object;
  delete(_id: string) : object;
  
}

export { IUsersRepository };