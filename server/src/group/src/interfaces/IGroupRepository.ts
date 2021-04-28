import { IGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IGroupDTO) : object;
    readById(_id: string) : object;
    readByName(name: string) : object;
    readAll() : object;
    update(_id: string, _idUser: string, data: IGroupDTO) : object;
    delete(_id: string, _idUser: string,) : object;
}

export { IGroupRepository };