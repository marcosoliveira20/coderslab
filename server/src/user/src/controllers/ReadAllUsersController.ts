import { Request, Response } from "express";

import { User } from "../model/User";

class ReadAllUsersController {
  async handle(request: Request, response: Response) {
    const user = new User();

    try {
      const data = await user.readAll();

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadAllUsersController };
