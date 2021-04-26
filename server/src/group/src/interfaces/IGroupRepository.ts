import { IIdGroupDTO, IAllGroupDTO, INameGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IAllGroupDTO) : object;
    readById(data: IIdGroupDTO) : object;
    readByName(data: INameGroupDTO) : object;
    readAll() : object;
    update(data: IAllGroupDTO) : object;
    delete(data: IIdGroupDTO) : object;
}

export { IGroupRepository };