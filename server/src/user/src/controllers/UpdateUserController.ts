import { Request, Response } from "express";

import { User } from "../model/User";

class UpdateUserController {
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
      const data = user.update({
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
      });

      if(!data.user) {
        return response.status(data.status).send(data.message);
      }

      return response.status(data.status).send(data.user);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { UpdateUserController };
