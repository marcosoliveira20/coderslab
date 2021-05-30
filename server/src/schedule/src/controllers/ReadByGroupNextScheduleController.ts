import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class ReadByGroupNextScheduleController {
  async handle(request: Request, response: Response) {
    const { id_group } = request.params;

    const schedule = new Schedule();
    const datetime = new Date(new Date().valueOf() - new Date().getTimezoneOffset() * 60000);

    try {
      const dataBd = await schedule.readByGroupNextSchedule(id_group, datetime);
      if (!dataBd) {
        return response.status(200).send({});
      }
      return response.status(200).send(dataBd);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
