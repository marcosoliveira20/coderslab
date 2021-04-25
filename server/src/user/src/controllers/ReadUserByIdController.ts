import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserByIdController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const readUser = new User();

    try {
      const user = readUser.readById({
        id
      });

      return response.status(user.status).json({message: user.message, user: user.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadUserByIdController };
