import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class ReadByOwnerScheduleController {
  async handle(request: Request, response: Response) {
    const { owner } = request.params;

    const schedule = new Schedule();

    try {
      const dataBd = await schedule.readByOwner(owner);
      if (!dataBd) {
        return response.status(404).send();
      }
      /* const data: ISubjecDTO = {
        id: dataBd._id,
        label: dataBd.label,
        categories: dataBd.categories,
      }; */
      return response.status(200).send(dataBd);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
