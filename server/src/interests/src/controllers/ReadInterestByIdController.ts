import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadInterestByIdController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const interests = new Interests();

    try {
      const data = interests.readById(id);

      if(!data.interest) {
        return response.status(data.status).send(data.message);
      }

      return response.status(data.status).send(data.interest);


    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadInterestByIdController };
