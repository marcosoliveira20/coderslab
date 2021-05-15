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
    _owner,
    _schedule_list
  } : IGroupDTO) : void {
    GroupSchema.create({
      name,
      category,
      subject_label,
      level,
      token,
      is_public,
      is_default,
      _owner,
      _schedule_list
    });
  }

  readById(_id: string) : Promise<IGroupDTO> {
    return GroupSchema.findOne({ _id });
  }
  
  readByToken(token: string) : Promise<IGroupDTO> {
    return GroupSchema.findOne({ token });
  }

  readByName(name: string) : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ name: { "$regex": name }, is_public: true}).sort({ name: 1 });
  }

  readByCategory(category: string) : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ category, is_public: true}).sort({ name: 1 });
  }

  readBySubject(subject_label: string) : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ subject_label, is_public: true }).sort({ name: 1 });
  }

  readByLevel(level: number) : Promise<Array<IGroupDTO>> {
    return GroupSchema.find({ level, is_public: true }).sort({ name: 1 });
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
    _owner,
    _schedule_list
  } : IGroupDTO) : Promise<IGroupDTO> {
    return GroupSchema.findByIdAndUpdate(_id, {
      name,
      category,
      subject_label,
      level,
      token,
      is_public,
      is_default,
      _owner,
      _schedule_list
    }, {new: true});
  }

  delete(_id: string) : void {
    return GroupSchema.deleteOne({ _id });
  }
}

export { Group };