import { Request, Response } from "express";

import { ISubjecDTO } from "../interfaces/ISubjectDTO";
import { Subject } from "../model/Subject";

export default class UpdateSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { categories } = request.body;

    const subject = new Subject();

    try {
      let findSubjectId;
      await subject.readById(id).then((e) => {
        findSubjectId = e;
        if (!findSubjectId) {
          return response.status(404);
        }
        subject.update(id, categories).then((dataBd) => {
          /* const data: ISubjecDTO = {
            id: dataBd._id,
            label: dataBd.label,
            categories: dataBd.categories,
          }; */
          return response.status(200).send(dataBd);
        });
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400);
    }
  }
}
