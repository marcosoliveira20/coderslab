import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class UpdateChallengeTitleController {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { title } = request.body;

    const challenge = new Challenge();

    try{
      const roadmapAlreadyExists = await challenge.readById(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await challenge.updateTitle(_id, title);

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

export { UpdateChallengeTitleController };
