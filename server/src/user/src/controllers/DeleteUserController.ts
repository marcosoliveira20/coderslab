import { Request, Response } from "express";

import { User } from "../model/User";

class DeleteUserController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const user = new User();

    try {
      const data = user.delete(id);

      if(!data.message) {
        return response.status(data.status).send();
      }

      return response.status(data.status).send(data.message);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { DeleteUserController };
