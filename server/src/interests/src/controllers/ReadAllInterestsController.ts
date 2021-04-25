import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadAllInterestsController {
  async handle(request: Request, response: Response) {
    const readInterests = new Interests();

    try {
      const interests = readInterests.readAll();

      return response.status(interests.status).json({message: interests.message, interests: interests.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadAllInterestsController };