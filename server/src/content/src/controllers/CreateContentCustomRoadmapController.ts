import { Request, Response } from "express";

import { Content } from "../model/Content";
import Api from "../../../Api";

class CreateContentCustomRoadmapController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      deadline,
      reference,
      _roadmap_id,
    } = request.body;

    const content = new Content();

    try {
      const data = await content.create({
        title,
        description,
        deadline,
        reference,
        _roadmap_id
      });

      return response.status(201).send(data);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { CreateContentCustomRoadmapController };
