import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class TurnRoadmapNotDone {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const roadmap = new Roadmap();

    try{
      const roadmapAlreadyExists = await roadmap.turnRoadmapNotDone(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await roadmap.turnRoadmapNotDone(_id);

          return response.status(200).send(data);

        } catch (err) {
          console.log(err.message);
          return response.status(400).send();
        }
      } else {
        return response.status(404).send();
      }
    } catch (err) {
      console.log(err.message);
      response.status(400).send()
    }
  }
}

export { TurnRoadmapNotDone };
