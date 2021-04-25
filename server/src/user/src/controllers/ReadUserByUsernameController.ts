import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserByUsernameController {
  async handle(request: Request, response: Response) {
    const {
      username
    } = request.params;

    const user = new User();

    try {
      const data = user.readByUsername(username);

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

export { ReadUserByUsernameController };
