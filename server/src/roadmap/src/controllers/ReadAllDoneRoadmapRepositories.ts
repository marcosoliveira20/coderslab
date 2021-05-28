import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class ReadAllDoneRoadmapRepositories {
  async handle(request: Request, response: Response) {
    const roadmap = new Roadmap();

    const { user_id } = request.query;

    try {
      const data = await roadmap.readAllDoneRepositories(user_id);

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

export { ReadAllDoneRoadmapRepositories };
