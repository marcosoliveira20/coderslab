import { IGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IGroupDTO) : object;
    readById(id: string) : object;
    readByName(name: string) : object;
    readAll() : object;
    update(data: IGroupDTO) : object;
    delete(id: string) : object;
}

export { IGroupRepository };