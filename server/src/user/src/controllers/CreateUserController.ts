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
      interst_list,
      group_list,
    } = request.body;

    const createUser = new User();

    try {
      const user = createUser.create({
        id,
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password,
        interst_list,
        group_list,
      });

      return response.status(user.status).send(user.message);
    } catch(err) {
      return response.status(403);
    }
  }
}

export { CreateUserController };
