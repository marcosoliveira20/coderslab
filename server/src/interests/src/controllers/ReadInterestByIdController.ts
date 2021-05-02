import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadInterestByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const interests = new Interests();

    try {
      const data = await interests.readById(id);

      if(!data) {
        return response.status(404).send("Interest does not exist");
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadInterestByIdController };
