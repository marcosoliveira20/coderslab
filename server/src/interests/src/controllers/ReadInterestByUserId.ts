import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadInterestByUserId {
  async handle(request: Request, response: Response) {
    const { idUser } = request.params;

    const interests = new Interests();

    try {
      const data = await interests.readByUserId(idUser);

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadInterestByUserId };
