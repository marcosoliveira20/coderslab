import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class UpdateChallengeDescriptionController {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { description } = request.body;

    const challenge = new Challenge();

    try{
      const roadmapAlreadyExists = await challenge.readById(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await challenge.updateDescription(_id, description);

          return response.status(201).send(data);

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

export { UpdateChallengeDescriptionController };
