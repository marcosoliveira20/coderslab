import { IInterestsDTO } from "./IInterestsDTO";

interface IInterestsRepository {
  create(data: IInterestsDTO): object;
  readById(id: string) : object;
  readAll() : object;
  update(subject_label: string, level: string) : object;
  delete(id: string) : object;
  
}

export { IInterestsRepository };