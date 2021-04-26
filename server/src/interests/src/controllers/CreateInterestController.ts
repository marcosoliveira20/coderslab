import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class CreateInterestController {
  async handle(request: Request, response: Response) {
    const {
      id,
      subject_label,
      level
    } = request.body;

    const interests = new Interests();

    try {
      const data = interests.create({
        id,
        subject_label,
        level
      });

      return response.status(data.status).send(data.message);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { CreateInterestController };
