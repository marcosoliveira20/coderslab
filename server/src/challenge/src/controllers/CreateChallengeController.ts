import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class CreateChallengeController {
  async handle(request: Request, response: Response) {
    const challenge = request.body.challenge;

    const challenge_class = new Challenge();

    if(!challenge.length) {
      return response.status(204).send();
    } else {
      try {
        let new_challenge_list = []
        for(let i = 0; i < challenge.length; i++) {
          const new_challenge = await challenge_class.create(challenge[i]);

          new_challenge_list.push(new_challenge)
        }

          return response.status(201).send(new_challenge_list)
      } catch(err) {
        return response.status(404).send(err.message);
      }
    }
  }
}

export { CreateChallengeController };
