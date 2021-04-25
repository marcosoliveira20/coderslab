import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class ReadInterestByIdController {
  async handle(request: Request, response: Response) {
    const {
      id
    } = request.params;

    const readInterest = new Interests();

    try {
      const interest = readInterest.readById({
        id
      });

      return response.status(interest.status).json({message: interest.message, interest: interest.data});
    } catch (err) {
      return response.status(404);
    }
  }
}

export { ReadInterestByIdController };
