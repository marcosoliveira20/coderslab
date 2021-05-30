import { hash, compare } from "bcrypt";
import { Request, Response } from "express";
import { sign } from "jsonwebtoken"

import { User } from "../model/User";

class LoginUserController {
  async handle(request: Request, response: Response) {
    const {
      username,
      password
    } = request.body;

    const user = new User();
    
    try {
      let data = await user.readByUsername(username);
  
      if (!data) {
        return response.status(404).send();
      } 
      
      const comparePassword = await compare(password, data.password);

      if(!comparePassword) {
        return response.status(404).send();
      }

      const token = sign({}, "71ce41b9695dca078a73e0382b4b8d88", {
        subject: String(data._id),
        expiresIn: "5h"
      })

      data.token = token

      return response.status(200).send(data);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { LoginUserController };
