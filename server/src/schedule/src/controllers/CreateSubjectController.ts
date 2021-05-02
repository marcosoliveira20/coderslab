import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const Schedule = new Schedule();

    try {
      const data = Schedule.create({ id, label, categories });
      return response.status(data.status).send(data.message);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
