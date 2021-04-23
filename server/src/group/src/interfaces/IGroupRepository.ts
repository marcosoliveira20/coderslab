import { IIdGroupDTO, IAllGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IAllGroupDTO) : object;
    read(data: IIdGroupDTO) : object;
    update(data: IAllGroupDTO) : object;
    delete(data: IIdGroupDTO) : object;
}

export { IGroupRepository };