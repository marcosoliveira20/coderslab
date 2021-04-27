import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadByIdSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const subject = new Subject();

    try {
      const data = subject.readById(id);
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
