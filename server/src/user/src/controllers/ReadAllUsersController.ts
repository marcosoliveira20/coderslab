import { Request, Response } from "express";

import { User } from "../model/User";

class ReadAllUsersController {
  async handle(request: Request, response: Response) {
    const readUsers = new User();

    try {
      const users = readUsers.readAll();

      return response.status(users.status).json({message: users.message, users: users.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadAllUsersController };
