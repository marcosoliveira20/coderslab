import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserController {
  async handle(request: Request, response: Response) {
    const {
      id,
      username
    } = request.body;

    const readUser = new User();

    try {
      const user = readUser.read({
        id,
        username
      });

      return response.status(user.status).json({message: user.message, user: user.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadUserController };
