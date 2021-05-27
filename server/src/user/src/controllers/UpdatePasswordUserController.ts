import { Request, Response } from "express";
import { hash } from "bcrypt";

import { User } from "../model/User";

class UpdatePasswordUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const {
      email,
      password
    } = request.body;

    const user = new User();

    try {
      const findIndex = await user.readById(id);

      if(!findIndex) {
        return response.status(404).send();
      }

      if(findIndex.email !== email) {
        return response.status(403).send();
      }

      const passwordHash = await hash(password, 8);
      findIndex.password = passwordHash;

      await user.update(id, findIndex);
      
      return response.status(200).send();
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdatePasswordUserController };
