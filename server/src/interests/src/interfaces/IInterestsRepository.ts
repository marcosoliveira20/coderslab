import { IInterestsDTO } from "./IInterestsDTO";

interface IInterestsRepository {
  create(data: IInterestsDTO): void;
  readById(_id: string) : Promise<IInterestsDTO>;
  readBySubject(_id: string) : Promise<IInterestsDTO>;
  readAll() : Promise<Array<IInterestsDTO>>;
  update(_id:string, data: IInterestsDTO) : Promise<IInterestsDTO>;
  delete(_id: string) : void;
  
}

export { IInterestsRepository };