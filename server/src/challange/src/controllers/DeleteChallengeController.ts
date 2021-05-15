import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class DeleteChallengeController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const challenge = new Challenge();

    try{
      const challengeAlreadyExists = await challenge.readById(_id);

      if(challengeAlreadyExists){
        try {
          await challenge.delete(_id);

          return response.status(204).send();
        } catch (err) {

          console.log(err.message);
          return response.status(400).json({error: "Bad Request"});
        }
      } else {
        return response.status(404).json({error: "Bad Request"});
      }
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({error: "Bad Request"});
    }
  }
}

export { DeleteChallengeController };
