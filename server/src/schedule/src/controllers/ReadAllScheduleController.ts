import { Request, Response } from "express";

import { IScheduleDTO } from "../interfaces/IScheduleDTO";
import { Schedule } from "../model/Schedule";

export default class ReadAllScheduleController {
  async handle(request: Request, response: Response) {
    const schedule = new Schedule();

    try {
      const dataBd = await schedule.readAll();
      const data: Array<IScheduleDTO> = dataBd;
      // TODO converter dataBd na estrutura data (legivel de acordo com o swagger)
      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
