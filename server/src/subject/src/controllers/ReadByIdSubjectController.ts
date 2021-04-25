import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadByIdSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const readSubject = new Subject();

    try {
      const envio = readSubject.readById({ id });
      return response.status(envio.status).send(envio.subject);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
