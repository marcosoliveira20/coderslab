import { Request, Response } from "express";

import { Content } from "../model/Content";

class UpdateContenChallenge {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { challenge } = request.body;

    const roadmap = new Content();

    try{
      const roadmapAlreadyExists = await roadmap.readById(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await roadmap.updateChallenge(_id, challenge);

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

export { UpdateContenChallenge };
