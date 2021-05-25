import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class DeleteSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const subject = new Subject();

    try {
      const data = await subject.readById(id);
      if (!data) {
        return response.status(404).send();
      }
      await subject.delete(id).then(() => {
        return response.status(204).send();
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
