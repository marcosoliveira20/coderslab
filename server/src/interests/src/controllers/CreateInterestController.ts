import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class CreateInterestController {
  async handle(request: Request, response: Response) {
    const { _id_user, _id_subject, level } = request.body;

    const interests = new Interests();

    try {
      if (level < 0 || level > 2) {
        return response.status(406).send();
      }

      const findSubject = await interests.readByUserAndSubject(_id_user, _id_subject);

      if (findSubject) {
        return response.status(406).send();
      }

      await interests.create({
        _id_user,
        _id_subject,
        level,
      });

      return response.status(201).send();
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateInterestController };
