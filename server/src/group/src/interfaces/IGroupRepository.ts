import { IGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IGroupDTO) : object;
    readById(_id: string) : object;
    readByName(name: string) : object;
    readOwner(_id: string) : object;
    readAll() : object;
    update(_id: string, data: IGroupDTO) : object;
    delete(_id: string) : object;
}

export { IGroupRepository };