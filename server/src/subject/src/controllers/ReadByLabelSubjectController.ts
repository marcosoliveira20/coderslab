import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadByLabelSubjectController {
  async handle(request: Request, response: Response) {
    const { label } = request.params;

    const subject = new Subject();

    try {
      const data = subject.readByLabel(label);
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
