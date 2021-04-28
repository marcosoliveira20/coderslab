import { hash } from "bcrypt";
import { Request, Response } from "express";

import { User } from "../model/User";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      id,
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interest_list,
      group_list,
    } = request.body;

    const user = new User();
    
    try {
      const findUsername = await user.readByUsername(username);
      const findEmail = await user.readByEmail(email);
  
      if (findUsername || findEmail) {
        return response.status(403).send("User already exists");
      }
  
      const passwordHash = await hash(password, 8);

      await user.create({
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password: passwordHash,
        interest_list,
        group_list,
      });

      return response.status(201).send("User created");
    } catch(err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { CreateUserController };
