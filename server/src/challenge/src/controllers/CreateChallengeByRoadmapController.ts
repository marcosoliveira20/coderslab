import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class CreateChallengeByRoadmapController {
  async handle(request: Request, response: Response) {
    const challenge = request.body;

    const challenge_class = new Challenge();

    try {
      let new_challenge_list = []
        const new_challenge = await challenge_class.create(challenge);

        new_challenge_list.push(new_challenge)

      return response.status(201).send(new_challenge_list)
    } catch(err) {
      console.log(err.message)
      return response.status(401).send(err.message);
    }
  }
}

export { CreateChallengeByRoadmapController };
