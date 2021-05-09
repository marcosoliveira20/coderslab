import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadAllInterestsController {
  async handle(request: Request, response: Response) {
    const interests = new Interests();

    try {
      const data = await interests.readAll();

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadAllInterestsController };