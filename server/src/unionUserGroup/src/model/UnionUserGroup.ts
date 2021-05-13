import { IUnionUserGroupDTO } from "../interfaces/IUnionUserGroupDTO";
import { IUnionUserGroupRepository } from "../interfaces/IUnionUserGroupRepository";
import UnionUserGroupSchema from "../database/Schemas/UnionUserGroupSchema";

class UnionUserGroup implements IUnionUserGroupRepository {
    create({
        _id_user,
        _id_group
    }: IUnionUserGroupDTO): void {
        UnionUserGroupSchema.create({ _id_user, _id_group });
    }

    read({
        _id_user,
        _id_group
    }: IUnionUserGroupDTO): Promise<IUnionUserGroupDTO> {
        return UnionUserGroupSchema.findOne({ _id_user, _id_group });
    }
    
    readGroups(_id_user: string): Promise<Array<IUnionUserGroupDTO>> {
        return UnionUserGroupSchema.find({ _id_user });
    }

    readUsers(_id_group: string): Promise<Array<IUnionUserGroupDTO>> {
        return UnionUserGroupSchema.find({ _id_group });
    }
    
    delete({
        _id_user,
        _id_group
    }: IUnionUserGroupDTO): void {
        UnionUserGroupSchema.deleteOne({ _id_user, _id_group }, (err, result) => {
            if (err) {
                console.log("Erro ", err);
            } else {
                // console.log("Result ", result);
            }
        });
    }
}

export { UnionUserGroup };