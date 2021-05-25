import { Request, Response } from "express";

import { Content } from "../model/Content";

class ReadContentByRoadmapIdController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const content = new Content();

    try {
      const data = await content.readByRoadmapId(_id);

      if(!data) {
        return response.status(404).send("Content not found");
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadContentByRoadmapIdController };
