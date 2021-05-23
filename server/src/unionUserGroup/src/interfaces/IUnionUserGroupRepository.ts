import { IUnionUserGroupDTO } from "./IUnionUserGroupDTO";

interface IUnionUserGroupRepository {
    create(data: IUnionUserGroupDTO): void;
    read(data: IUnionUserGroupDTO): Promise<IUnionUserGroupDTO>
    readAllGroupsByUser(_id_user: string): Promise<Array<IUnionUserGroupDTO>>;
    readAllUsersByGroup(_id_group: string): Promise<Array<IUnionUserGroupDTO>>;
    delete(data: IUnionUserGroupDTO): void;
    deleteAllGroup(_id_group: string): void;
}

export { IUnionUserGroupRepository };