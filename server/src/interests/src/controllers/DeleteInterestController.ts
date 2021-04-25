import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class DeleteInterestController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const deleteInterests = new Interests();

    try {
      const interest = deleteInterests.delete({
        id
      });

      return response.status(interest.status).send(interest.message);
    } catch (err) {
      return response.status(404);
    }
  }
}

export { DeleteInterestController };
