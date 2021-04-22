import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserController {
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

    const readUser = new User();

    try {
      const user = readUser.read({
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

      return response.status(user.status).json({message: user.message, user: user.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadUserController };
