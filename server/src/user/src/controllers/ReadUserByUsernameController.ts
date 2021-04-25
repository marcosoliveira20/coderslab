import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserByUsernameController {
  async handle(request: Request, response: Response) {
    const {
      username
    } = request.params;

    const readUser = new User();

    try {
      const user = readUser.readByUsername({
        username
      });

      return response.status(user.status).json({message: user.message, user: user.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadUserByUsernameController };
