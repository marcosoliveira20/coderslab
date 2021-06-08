import { Request, Response } from "express";

import { Schedule } from "../model/Schedule";

export default class CreateScheduleController {
  async handle(request: Request, response: Response) {
    const { datetime, link, description, owner, id_group } = request.body;
    console.log(datetime);

    const schedule = new Schedule();

    try {
      // let findScheduleOwner;
      // schedule.readByOwner(owner).then((e) => {
        // só adms podem criar reunião segundo o front
        // findScheduleOwner = e;
        // if (findScheduleOwner) {
        //   return response.status(403).send();
        // }
      schedule
        .create(datetime, link, description, owner, id_group)
        .then(() => {
          return response.status(201).send();
        });
      // });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
