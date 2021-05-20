import { IGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IGroupDTO) : void;
    readById(_id: string) : Promise<IGroupDTO>;
    readByToken(token: string) : Promise<IGroupDTO>;
    readByOwner(_owner: string) : Promise<Array<IGroupDTO>>;
    readAll() : Promise<Array<IGroupDTO>>;
    update(_id: string, data: IGroupDTO) : Promise<IGroupDTO>;
    delete(_id: string) : void;
}

export { IGroupRepository };