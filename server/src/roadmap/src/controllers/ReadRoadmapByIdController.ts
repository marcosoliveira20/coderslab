import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class ReadRoadmapByIdController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const roadmap = new Roadmap();

    try {
      const data = await roadmap.readById(_id);

      if(!data) {
        return response.status(404).send();
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadRoadmapByIdController };
