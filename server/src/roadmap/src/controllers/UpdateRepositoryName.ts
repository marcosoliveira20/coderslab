import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class UpdateRepositoryName {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { name } = request.body;

    const roadmap = new Roadmap();

    try{
      const roadmapAlreadyExists = await roadmap.turnRoadmapNotDone(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await roadmap.updateName(_id, name);

          return response.status(200).send(data);

        } catch (err) {
          console.log(err.message);
          return response.status(400).json({error: "Bad request"});
        }
      } else {
        return response.status(404).json({error: "Roadmap not found"});
      }
    } catch (err) {
      console.log(err.message);
      response.status(400).json({error: "Bad request"})
    }
  }
}

export { UpdateRepositoryName };
