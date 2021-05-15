import { Request, Response } from "express";

import { User } from "../model/User";

class ReadUserByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;

    const user = new User();

    try {
      const data = await user.readByEmail(email);

      if(!data) {
        return response.status(404).send();
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadUserByEmailController };
