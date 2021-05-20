import { IGroupDTO } from "../interfaces/IGroupDTO";
import { IGroupRepository } from "../interfaces/IGroupRepository";
import GroupSchema from "../database/Schemas/GroupSchema";

class Group implements IGroupRepository {
  create({
    name,
    category,
    subject_label,
    level,
    token,
    is_public,
    is_default,
    _owner
  } : IGroupDTO) : void {
    GroupSchema.create({
      name,
      category,
      subject_label,
      level,
      token,
      is_public,
      is_default,
      _owner
    });
  }

  readById(_id: string) : Promise<IGroupDTO> {
    return GroupSchema.findOne({ _id });
  }
  
  readByToken(token: string) : Promise<IGroupDTO> {
    return GroupSchema.findOne({ token });
  }

  readByOwner(_owner: string) : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ _owner }).sort({ name: 1 });
  }

  readAll() : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ is_public: true }).sort({ name: 1 });
  }

  update(_id: string, {
    name,
    category,
    subject_label,
    level,
    token,
    is_public,
    is_default,
    _owner
  } : IGroupDTO) : Promise<IGroupDTO> {
    return GroupSchema.findByIdAndUpdate(_id, {
      name,
      category,
      subject_label,
      level,
      token,
      is_public,
      is_default,
      _owner
    }, {new: true});
  }

  delete(_id: string) : void {
    return GroupSchema.deleteOne({ _id });
  }
}

export { Group };