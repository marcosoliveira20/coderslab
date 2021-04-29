import { IGroupDTO } from "../interfaces/IGroupDTO";
import { IGroupRepository } from "../interfaces/IGroupRepository";
import GroupSchema from "../database/Schemas/GroupSchema";

class Group implements IGroupRepository {
  async create({
    name,
    category,
    subject,
    is_public,
    _owner,
    _user_list,
    _schedule_list
  } : IGroupDTO) : Promise<object> {
    return await GroupSchema.create({
      name,
      category,
      subject,
      is_public,
      _owner,
      _user_list,
      _schedule_list
    });
  }

  async readById(_id: string) : Promise<object> {
    return await GroupSchema.findOne({ _id });
  }

  async readByName(name: string) : Promise<object> {
    return await GroupSchema.findOne({ name });
  }

  async readByOwner(_id: string) : Promise<string> {
    let data = await GroupSchema.findOne({ _id });
    return data._owner;
  }

  async readAll() : Promise<object> {
    return await GroupSchema.find().sort({ name: 1 });
  }

  async update(_id: string, {
    name,
    category,
    subject,
    is_public,
    _owner,
    _user_list,
    _schedule_list
  } : IGroupDTO) : Promise<object> {
    return await GroupSchema.findByIdAndUpdate(_id, {
      name,
      category,
      subject,
      is_public,
      _owner,
      _user_list,
      _schedule_list
    }, {new: true});
  }

  async delete(_id: string) : Promise<object> {
    return await GroupSchema.deleteOne({ _id });
  }
}

export { Group };