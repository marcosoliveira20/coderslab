import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class UpdateInterestController {
  async handle(request: Request, response: Response) {
    const {
        id,
        level
    } = request.body;

    const updateInterest = new Interests();

    try {
      const interest = updateInterest.update({
        id,
        level
      });

      return response.status(interest.status).json({message: interest.message, interest: interest.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { UpdateInterestController };
