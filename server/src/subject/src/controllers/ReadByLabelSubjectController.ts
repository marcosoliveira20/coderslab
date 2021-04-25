import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadByLabelSubjectController {
  async handle(request: Request, response: Response) {
    const { label } = request.params;

    const readSubject = new Subject();

    try {
      const envio = readSubject.readByLabel({ label });
      return response.status(envio.status).send(envio.subject);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
