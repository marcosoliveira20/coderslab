import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class UpdateSubjectController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const subject = new Subject();

    try {
      const data = subject.update({ id, label, categories });
      if (!data.subject) {
        return response.status(data.status).send(data.message);
      }
      return response.status(data.status).send(data.subject);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
