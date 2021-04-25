import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserByIdController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const user = new User();

    try {
      const data = user.readById(id);

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

export { ReadUserByIdController };
