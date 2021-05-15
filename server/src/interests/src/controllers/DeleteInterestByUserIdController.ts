import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class DeleteInterestByUserIdController {
  async handle(request: Request, response: Response) {
    const { idUser } = request.params;

    const interests = new Interests();

    try {
      await interests.deleteByUserId(idUser);

      return response.status(204).send();
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { DeleteInterestByUserIdController };
