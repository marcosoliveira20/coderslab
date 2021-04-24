import { IAllGroupDTO, IIdGroupDTO } from "../interfaces/IGroupDTO";
import { IGroupRepository } from "../interfaces/IGroupRepository";

const groups = [];

class Group implements IGroupRepository {
  create({
    id,
    name,
    category,
    subject,
    is_public,
    user_list,
    schedule_list
  }) : { message: string; status: number } {

    const groupAlreadyExists = groups.findIndex(g => g.id === id);

    if(groupAlreadyExists >= 0) {
      return { message: "Group already exists", status: 403 };
    }

    groups.push({
      id,
      name,
      category,
      subject,
      is_public,
      user_list,
      schedule_list
    });

    return { message: "Group created", status: 200 };
  }

  read({
    id
  }) : { data: object; message: string; status: number } {

    const groupAlreadyExists = groups.find(g => g.id === id);

    if(!groupAlreadyExists) {
      return { data: {}, message: "Group does not exist", status: 404 };
    }

    return { data: groupAlreadyExists, message: "Group exists", status: 201 };
  }

  update({
    id,
    name,
    category,
    subject,
    is_public,
    user_list,
    schedule_list
  }) : { data: object; message: string; status: number } {
    
    const groupAlreadyExists = groups.find(g => g.id === id);

    if(!groupAlreadyExists) {
      return { data: {}, message: "Group does not exist", status: 404 };
    }

    groupAlreadyExists.name = name;
    groupAlreadyExists.category = category;
    groupAlreadyExists.subject = subject;
    groupAlreadyExists.is_public = is_public;
    groupAlreadyExists.user_list = user_list;
    groupAlreadyExists.schedule_list = schedule_list;

    return { data: { groupAlreadyExists }, message: "Group updated", status: 201 };
  }

  delete({
    id
  }) : { message: string; status: number } {

    const groupAlreadyExists = groups.findIndex(g => g.id === id);

    if(groupAlreadyExists === -1) {
      return { message: "Group does not exist", status: 404 };
    }

    groups.splice(groupAlreadyExists, 1);

    return { message: "Group deleted", status: 200 };
  }
}

export { Group };