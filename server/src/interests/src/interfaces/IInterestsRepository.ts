import { IInterestsDTO } from "./IInterestsDTO";

interface IInterestsRepository {
  create(data: IInterestsDTO): object;
  readById(_id: string) : object;
  readSubject(_id: string) : object;
  readAll() : object;
  update(_id:string, data: IInterestsDTO) : object;
  delete(_id: string) : object;
  
}

export { IInterestsRepository };