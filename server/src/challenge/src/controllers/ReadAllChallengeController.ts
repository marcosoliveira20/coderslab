import { Request, Response } from "express";

import { Challenge } from "../model/Challenge";

class ReadAllChallengeController {
  async handle(request: Request, response: Response) {
    const challenge = new Challenge();

    try {
      const data = await challenge.readAll();

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadAllChallengeController };
