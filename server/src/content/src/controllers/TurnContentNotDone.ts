import { Request, Response } from "express";

import { Content } from "../model/Content";

class TurnContentNotDone {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const roadmap = new Content();

    try{
      const roadmapAlreadyExists = await roadmap.turnContentNotDone(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await roadmap.turnContentNotDone(_id);

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

export { TurnContentNotDone };
