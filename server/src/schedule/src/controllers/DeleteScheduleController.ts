import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class DeleteScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const schedule = new Schedule();

    try {
      const dataBd = await schedule.readById(id);
      if (!dataBd) {
        return response.status(404);
      }
      await schedule.delete(id).then(() => {
        return response.status(204);
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400);
    }
  }
}
