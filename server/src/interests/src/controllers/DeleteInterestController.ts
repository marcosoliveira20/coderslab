import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class DeleteInterestController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const interests = new Interests();

    try {
      const data = interests.delete(id);

      if(!data.message) {
        return response.status(data.status).send();
      }

      return response.status(data.status).send(data.message);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { DeleteInterestController };
