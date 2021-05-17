import { IInterestsDTO } from "./IInterestsDTO";

interface IInterestsRepository {
  create(data: IInterestsDTO): void;
  readById(_id: string) : Promise<IInterestsDTO>;
  readByUserAndSubject(_id_user, _id_subject: string) : Promise<IInterestsDTO>;
  readByUserId(_id_user: string) : Array<Promise<IInterestsDTO>>;
  readAll() : Promise<Array<IInterestsDTO>>;
  update(_id:string, data: IInterestsDTO) : Promise<IInterestsDTO>;
  delete(_id: string) : void;
  deleteByUserId(_id_user: string) : void;
  
}

export { IInterestsRepository };