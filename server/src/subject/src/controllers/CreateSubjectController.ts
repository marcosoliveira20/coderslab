import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class CreateSubjectController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const createSubject = new Subject();

    try {
      const envio = createSubject.create({ id, label, categories });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
