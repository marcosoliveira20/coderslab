import { hash } from "bcrypt";
import { Request, Response } from "express";

import { User } from "../model/User";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      _interest_list,
    } = request.body;

    const user = new User();
    
    try {
      const findUsername = await user.readByUsername(username);
      const findEmail = await user.readByEmail(email);
  
      if (findUsername || findEmail) {
        return response.status(403).send();
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
        _interest_list,
      });

      return response.status(201).send();
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateUserController };
