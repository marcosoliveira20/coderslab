import { IGroupDTO } from "../interfaces/IGroupDTO";
import { IGroupRepository } from "../interfaces/IGroupRepository";

const groups = [];

class Group implements IGroupRepository {
  create({
    name,
    category,
    subject,
    is_public,
    owner,
    user_list,
    schedule_list
  } : IGroupDTO) : { message: string; status: number } {

    const findIndex = groups.findIndex(g => g.id === id);

    if(findIndex >= 0) {
      return { message: "Group already exists", status: 403 };
    }

    groups.push({
      name,
      category,
      subject,
      is_public,
      owner,
      user_list,
      schedule_list
    });

    return { message: "Group created", status: 201 };
  }

  readById(id: string) : { group?: IGroupDTO; message?: string; status: number } {

    const group = groups.find(g => g.id === id);

    if(!group) {
      return { message: "Group does not exist", status: 404 };
    }

    return { group, status: 200 };
  }

  readByName(name: string) : { group?: IGroupDTO; message?: string; status: number } {

    const group = groups.find(g => g.name === name);

    if(!group) {
      return { message: "Group does not exist", status: 404 };
    }

    return { group, status: 200 };
  }

  readAll() : { groups: Array<IGroupDTO>; status: number } {
    if(groups.length === 0) {
      return { groups, status: 200 };
    }

    return { groups, status: 200 };
  }

  update(id: string, {
    name,
    category,
    subject,
    is_public,
    owner,
    user_list,
    schedule_list
  } : IGroupDTO) : { group?: IGroupDTO; message?: string; status: number } {
    
    const group = groups.find(g => g.id === id);

    if(!group) {
      return { message: "Group does not exist", status: 404 };
    }

    group.name = name;
    group.category = category;
    group.subject = subject;
    group.is_public = is_public;
    group.owner = owner;
    group.user_list = user_list;
    group.schedule_list = schedule_list;

    return { group, status: 200 };
  }

  delete(id: string) : { message?: string; status: number } {

    const findIndex = groups.findIndex(g => g.id === id);

    if(findIndex === -1) {
      return { message: "Group does not exist", status: 404 };
    }

    groups.splice(findIndex, 1);

    return { status: 204 };
  }
}

export { Group };