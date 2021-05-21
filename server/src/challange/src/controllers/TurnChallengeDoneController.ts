import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class TurnChallengeDoneController {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const challenge = new Challenge();

    try{
      const challengeAlreadyExists = await challenge.readById(_id);

      if (challengeAlreadyExists) {
        try {
          const data = await challenge.turnChallengeDone(_id);

          return response.status(200).send(data);

        } catch (err) {
          console.log(err.message);
          return response.status(400).json({error: "Bad request"});
        }
      } else {
        return response.status(404).json({error: "Challenge not found"});
      }
    } catch (err) {
      console.log(err.message);
      response.status(400).json({error: "Bad request"})
    }
  }
}

export { TurnChallengeDoneController };
