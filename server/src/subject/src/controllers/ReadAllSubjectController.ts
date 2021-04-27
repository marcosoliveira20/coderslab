import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadAllSubjectController {
  async handle(request: Request, response: Response) {
    const subject = new Subject();

    try {
      const data = subject.readAll();

      return response.status(data.status).send(data.subjects);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
