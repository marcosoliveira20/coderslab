import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class CreateRoadmapCustomController {
  async handle(request: Request, response: Response) {
    const {
      name,
      objective,
      content_list
    } = request.body;

    const roadmap = new Roadmap();

    const roadmapAlreadyExists = await roadmap.readByName(name);

    if(!roadmapAlreadyExists) {
      try {
        const data = await roadmap.createCustomized({
          name,
          objective,
          content_list
        });

        return response.status(201).send(data);
      } catch(err) {
        console.log(err.message);
        return response.status(400).send();
      }
    } else {
      return response.status(409).send()
    }
  }
}

export { CreateRoadmapCustomController };
