import { Request, Response } from "express";

// import { IScheduleDTO } from "../interfaces/IScheduleDTO";
import { Schedule } from "../model/Schedule";

export default class ReadByIdScheduleController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const schedule = new Schedule();

    try {
      const dataBd = await schedule.readById(id);
      if (!dataBd) {
        return response.status(404).send();
      }
      // TODO converter dataBd na estrutura data (legivel de acordo com o swagger)
      /* const data: IScheduleDTO {
        id: dataBd._id,
        datetime: dataBd.datetime,
        link: dataBd.link,
        description: dataBd.description,
        owner: dataBd.owner,
      }; */
      return response.status(200).send(dataBd);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}
