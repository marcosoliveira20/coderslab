import { Request, Response } from "express";

import { Subject } from "../model/Subject";

export default class CreateSubjectController {
  async handle(request: Request, response: Response) {
    const { label, categories } = request.body;

    const subject = new Subject();

    if (!isNaN(label)) {
      return response.status(400).send("Bad Request");
    }

    try {
      let findSubjectLabel;
      subject.readByLabel(label).then((e) => {
        findSubjectLabel = e;
        if (findSubjectLabel) {
          return response.status(403).send("Subject already exists");
        }
        subject.create(label, categories).then(() => {
          return response.status(201).send("Subject created");
        });
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
