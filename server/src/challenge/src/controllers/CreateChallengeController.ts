import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class CreateChallengeController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
    } = request.body;

    const challenge = new Challenge();

    const contentAlreadyExists = await challenge.readByTitle(title);

    if(!contentAlreadyExists) {
      try {
        const data = await challenge.create({
          title,
          description,
        });

        return response.status(201).send(data);
      } catch(err) {
        console.log(err.message);
        return response.status(400).send("Bad Request");
      }
    } else {
      return response.status(409).json({error: "Challenge already exists"})
    }
  }
}

export { CreateChallengeController };
