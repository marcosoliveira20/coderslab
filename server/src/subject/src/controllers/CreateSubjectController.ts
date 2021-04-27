import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class CreateSubjectController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const subject = new Subject();

    try {
      const data = subject.create({ id, label, categories });
      return response.status(data.status).send(data.message);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
