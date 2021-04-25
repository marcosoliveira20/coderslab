import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class ReadAllSubjectController {
  async handle(request: Request, response: Response) {
    const readAllSubject = new Subject();

    try {
      const envio = readAllSubject.readAll();
      if (envio.subject_list.length === 0) {
        return response.status(envio.status).send(envio.subject_list);
      }
      return response.status(envio.status).send(envio.subject_list);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
