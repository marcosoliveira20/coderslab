import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class DeleteRoadmapController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const roadmap = new Roadmap();

    const roadmapAlreadyExists = await roadmap.readById(_id);

    if(roadmapAlreadyExists){
      try {
        await roadmap.delete(_id);

        return response.status(204).send();
      } catch (err) {

        console.log(err.message);
        return response.status(400).json({error: "Bad Request"});
      }
    } else {
      return response.status(404).json({error: "Bad Request"});
    }
  }
}

export { DeleteRoadmapController };
