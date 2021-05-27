import { Request, Response } from "express";
import { hash } from "bcrypt";

import { User } from "../model/User";

class UpdateUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password
    } = request.body;

    const user = new User();

    try {
      const findIndex = await user.readById(id);

      if(!findIndex) {
        return response.status(404).send();
      }

      const passwordHash = await hash(password, 8);

      const data = await user.update(id, {
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password: passwordHash,
      });
      
      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdateUserController };
