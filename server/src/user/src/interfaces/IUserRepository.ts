import { IAllUserDTO, IIdUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IAllUserDTO): object;
  read(data: IIdUserDTO) : object;
  update(data: IAllUserDTO) : object;
  delete(data: IIdUserDTO) : object;
  
}

export { IUsersRepository };