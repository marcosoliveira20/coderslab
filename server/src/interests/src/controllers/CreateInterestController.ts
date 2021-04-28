import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class CreateInterestController {
  async handle(request: Request, response: Response) {
    const {
      subject_label,
      level
    } = request.body;

    const interests = new Interests();

    try {
      if(level < 0 || level > 2) {
        return response.status(406).send();
      }

      const findSubject = await interests.readBySubject(subject_label);

      if (findSubject) {
        return response.status(403).send("Interest already exists");
      }

      await interests.create({
        subject_label,
        level
      });

      return response.status(201).send("Interest created");
    } catch(err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { CreateInterestController };
