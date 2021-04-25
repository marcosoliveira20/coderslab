import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class CreateInterestController {
  async handle(request: Request, response: Response) {
    const {
      id,
      subject_label,
      level
    } = request.body;

    const createInterest = new Interests();

    try {
      const interest = createInterest.create({
        id,
        subject_label,
        level
      });

      return response.status(interest.status).send(interest.message);
    } catch(err) {
      return response.status(403);
    }
  }
}

export { CreateInterestController };
