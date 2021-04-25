import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class DeleteSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteSubject = new Subject();

    try {
      const envio = deleteSubject.delete({ id });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
