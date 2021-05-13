import { IUserDTO } from "../interfaces/IUserDTO";
import { IUsersRepository } from "../interfaces/IUserRepository";
import UserSchema from "../database/Schemas/UserSchema";

class User implements IUsersRepository {
  create({
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
  }: IUserDTO): void {
    UserSchema.create({
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
    });
  }

  readById(_id : string) : Promise<IUserDTO> {
    return UserSchema.findOne({ _id });
  }

  readByUsername(username : string) : Promise<IUserDTO> {
    return UserSchema.findOne({ username });
  }

  readByEmail(email : string) : Promise<IUserDTO> {
    return UserSchema.findOne({ email });
  }

  readAll() : Promise<Array<IUserDTO>> {
    return UserSchema.find().sort({ username: 1 });
  }

  update(_id: string, {
    username,
    name,
    last_name,
    email,
    discord_id,
    github_id,
    password,
  } : IUserDTO) : Promise<IUserDTO> {
    return UserSchema.findByIdAndUpdate(_id, {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
    }, {new: true});
  }

  delete(_id : string) : void {
    UserSchema.deleteOne({ _id });
  }
}

export { User };
