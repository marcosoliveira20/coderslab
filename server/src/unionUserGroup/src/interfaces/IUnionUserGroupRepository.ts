import { IUnionUserGroupDTO } from "./IUnionUserGroupDTO";

interface IUnionUserGroupRepository {
    create(data: IUnionUserGroupDTO): void;
    read(data: IUnionUserGroupDTO): Promise<IUnionUserGroupDTO>
    readGroups(_id_user: string): Promise<Array<IUnionUserGroupDTO>>;
    readUsers(_id_group: string): Promise<Array<IUnionUserGroupDTO>>;
    delete(data: IUnionUserGroupDTO): void;
}

export { IUnionUserGroupRepository };