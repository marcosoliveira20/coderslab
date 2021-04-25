import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class UpdateSubjectController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const updateSubject = new Subject();

    try {
      const envio = updateSubject.update({ id, label, categories });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
