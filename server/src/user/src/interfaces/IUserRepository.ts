import { IUserDTO } from "./IUserDTO";

interface IUsersRepository {
  create(data: IUserDTO): void;
}

export { IUsersRepository };
