import { IUserDTO } from "../interfaces/IUserDTO";
import { IUsersRepository } from "../interfaces/IUserRepository";
import UserSchema from "../database/Schemas/UserSchema";

class User implements IUsersRepository {
  async create({
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
    interest_list,
    group_list
  }: IUserDTO): Promise<object | null> {
    const user = await UserSchema.create({
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interest_list,
      group_list
  });

    return user;
  }

  async readById(_id : string) : Promise<object> {
    return await UserSchema.findOne({ _id });
  }

  async readByUsername(username : string) : Promise<object> {
    return await UserSchema.findOne({ username });
  }

  async readByEmail(email : string) : Promise<object> {
    return await UserSchema.findOne({ email });
  }

  async readAll() : Promise<object> {
    return await UserSchema.find().sort({ username: 1 });
  }

  async update(_id: string, {
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
    interest_list,
    group_list
  } : IUserDTO) : Promise<object> {
    return await UserSchema.findByIdAndUpdate(_id, {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interest_list,
      group_list
    }, {new: true});
  }

  async delete(_id : string) : Promise<object>{
    return await UserSchema.deleteOne({ _id });
  }
}

export { User };
