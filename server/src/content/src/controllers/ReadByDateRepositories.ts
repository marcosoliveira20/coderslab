import { Request, Response } from "express";

import { Content } from "../model/Content";

class ReadByDateRepositories {
  async handle(request: Request, response: Response) {
    const { _roadmap_id } = request.params;

    const today = new Date(Date.now()).toISOString()

    const content = new Content();


    try {
      const data = await content.readLateContents(_roadmap_id, today)

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

export { ReadByDateRepositories };
