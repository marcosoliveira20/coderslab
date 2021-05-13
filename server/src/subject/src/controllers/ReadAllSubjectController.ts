import { Request, Response } from "express";

import { ISubjecDTO } from "../interfaces/ISubjectDTO";
import { Subject } from "../model/Subject";

export default class ReadAllSubjectController {
  async handle(request: Request, response: Response) {
    const subject = new Subject();

    try {
      const dataBd = await subject.readAll();
      const data: Array<ISubjecDTO> = dataBd;
      /* let contador = -1;
      dataBd.map((dbd) => {
        data[contador++] = {
          id = dbd._id,
          label = dbd.label,
          categories = dbd.categories,
        };
      }); */
      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
