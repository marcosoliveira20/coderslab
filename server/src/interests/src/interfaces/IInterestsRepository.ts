import { IAllInterestsDTO, IIdInterestDTO, IIdLevelInterestDTO } from "./IInterestsDTO";

interface IInterestsRepository {
  create(data: IAllInterestsDTO): object;
  readById(data: IIdInterestDTO) : object;
  readAll() : object;
  update(data: IIdLevelInterestDTO) : object;
  delete(data: IIdInterestDTO) : object;
  
}

export { IInterestsRepository };