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
    return { data: {}, message: "", status: 0 };
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
    return { data: {}, message: "", status: 0 };
  }

  delete({
    id
  }) : { message: string; status: number } {
    return { message: "", status: 0 };
  }
}

export { Group };