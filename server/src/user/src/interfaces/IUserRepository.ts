import { IAllUserDTO, IIdUserDTO, IUsernameUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IAllUserDTO): object;
  readById(data: IIdUserDTO) : object;
  readByUsername(data: IUsernameUserDTO) : object;
  readAll() : object;
  update(data: IAllUserDTO) : object;
  delete(data: IIdUserDTO) : object;
  
}

export { IUsersRepository };