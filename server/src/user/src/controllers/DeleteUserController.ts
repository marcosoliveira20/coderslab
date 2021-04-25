import { Request, Response } from "express";

import { User } from "../model/User";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const deleteUser = new User();

    try {
      const user = deleteUser.delete({
        id
      });

      return response.status(user.status).send(user.message);
    } catch (err) {
      return response.status(404);
    }
  }
}

export { DeleteUserController };
