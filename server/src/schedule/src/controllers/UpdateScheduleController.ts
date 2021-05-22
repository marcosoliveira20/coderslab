import { Request, Response } from "express";

import { IScheduleDTO } from "../interfaces/IScheduleDTO";
import { Schedule } from "../model/Schedule";

export default class UpdateScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    const { datetime, link, description } = request.body;

    const schedule = new Schedule();

    try {
      let findScheduleId;
      await schedule.readById(id).then((e) => {
        findScheduleId = e;
        if (!findScheduleId) {
          return response.status(404).send();
        }
        schedule.update(id, datetime, link, description).then((dataBd) => {
          const data: IScheduleDTO = dataBd;
          return response.status(200).send(data);
        });
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
