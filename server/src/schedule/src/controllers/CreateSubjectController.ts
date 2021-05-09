import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { datetime, link, description, owner } = request.body;

    const schedule = new Schedule();

    try {
      schedule.create(datetime, link, description, owner).then(() => {
        return response.status(201).send("Schedule created");
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
