import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class ReadByIdScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const Schedule = new Schedule();

    try {
      const data = Schedule.readById(id);
      if (!data.Schedule) {
        return response.status(data.status).send(data.message);
      }
      return response.status(data.status).send(data.Schedule);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
