import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class CreateRoadmapDefaultController {
  async handle(request: Request, response: Response) {
    const {
      name,
      objective,
      content_list,
      level
    } = request.body;

    const roadmap = new Roadmap();

    try {
      const data = await roadmap.createDefault({
        name,
        objective,
        content_list,
        level
      });

      return response.status(201).send(data);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateRoadmapDefaultController };
