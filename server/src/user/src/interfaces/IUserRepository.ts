import { IUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IUserDTO): object;
  readById(id: string) : object;
  readByUsername(username: string) : object;
  readAll() : object;
  update(data: IUserDTO) : object;
  delete(id: string) : object;
  
}

export { IUsersRepository };