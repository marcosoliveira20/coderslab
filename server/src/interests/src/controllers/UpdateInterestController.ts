import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class UpdateInterestController {
  async handle(request: Request, response: Response) {
    const {
        subject_label,
        level
    } = request.body;

    const interests = new Interests();

    try {
      const data = interests.update(subject_label, level);

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

export { UpdateInterestController };
