import { IGroupDTO } from "./IGroupDTO";

interface IGroupRepository {
    create(data: IGroupDTO) : void;
    readById(_id: string) : Promise<IGroupDTO>;
    readByToken(token: string) : Promise<IGroupDTO>;
    readByName(name: string) : Promise<Array<IGroupDTO>>;
    readByCategory(category: string) : Promise<Array<IGroupDTO>>;
    readBySubject(subject_label: string) : Promise<Array<IGroupDTO>>;
    readByLevel(level: number) : Promise<Array<IGroupDTO>>;
    readAll() : Promise<Array<IGroupDTO>>;
    update(_id: string, data: IGroupDTO) : Promise<IGroupDTO>;
    delete(_id: string) : void;
}

export { IGroupRepository };