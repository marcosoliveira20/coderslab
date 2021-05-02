import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class ReadAllScheduleController {
  async handle(request: Request, response: Response) {
    const Schedule = new Schedule();

    try {
      const data = Schedule.readAll();

      return response.status(data.status).send(data.Schedules);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
