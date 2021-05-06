import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class DeleteInterestController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const interests = new Interests();

    try {
      const findIndex = await interests.readById(id);

      if(!findIndex) {
        return response.status(404).send();
      }

      await interests.delete(id);

      return response.status(204).send();
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { DeleteInterestController };
