import { Request, Response } from "express";

import { User } from "../model/User";

class ReadAllUsersController {
  async handle(request: Request, response: Response) {
    const user = new User();

    try {
      const data = user.readAll();

      return response.status(data.status).send(data.users);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadAllUsersController };
