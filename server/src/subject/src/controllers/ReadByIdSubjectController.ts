import { Request, Response } from "express";

import { ISubjecDTO } from "../interfaces/ISubjectDTO";
import { Subject } from "../model/Subject";

export default class ReadByIdSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const subject = new Subject();

    try {
      const dataBd = await subject.readById(id);
      if (!dataBd) {
        return response.status(404).send("Subject does not exist");
      }
      const data: ISubjecDTO = {
        id: dataBd._id,
        label: dataBd.label,
        categories: dataBd.categories,
      };
      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
