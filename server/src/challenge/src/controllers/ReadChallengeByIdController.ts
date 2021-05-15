import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class ReadChallengeByIdController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const challenge = new Challenge();

    try {
      const data = await challenge.readById(_id);

      if(!data) {
        return response.status(404).send("Challenge not found");
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadChallengeByIdController };
