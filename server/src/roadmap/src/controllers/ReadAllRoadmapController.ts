import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class ReadAllRoadmapController {
  async handle(request: Request, response: Response) {
    const roadmap = new Roadmap();

    let { user_id } = request.query;

    try {
      const data = await roadmap.readAll(user_id);

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadAllRoadmapController };
