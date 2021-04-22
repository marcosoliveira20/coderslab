import { Request, Response } from "express";

import { User } from "../model/User";

class DeleteUserController {
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

    const deleteUser = new User();

    try {
      const user = deleteUser.delete({
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
    } catch (err) {
      return response.status(404);
    }
  }
}

export { DeleteUserController };
