import { Request, Response } from "express";

import { User } from "../model/User";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const user = new User();

    try {
      const findIndex = await user.readById(id);

      if (!findIndex) {
        return response.status(404).send();
      }

      await user.delete(id);

      return response.status(204).send();
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { DeleteUserController };
