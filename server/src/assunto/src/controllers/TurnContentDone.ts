import { Request, Response } from "express";

import { Content } from "../model/Content";

class TurnContentDone {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const content = new Content();

    try{
      const contentAlreadyExists = await content.readById(_id);

      if (contentAlreadyExists) {
        try {
          const data = await content.turnContentDone(_id);

          return response.status(200).send(data);

        } catch (err) {
          console.log(err.message);
          return response.status(400).json({error: "Bad request"});
        }
      } else {
        return response.status(404).json({error: "Content not found"});
      }
    } catch (err) {
      console.log(err.message);
      response.status(400).json({error: "Bad request"})
    }
  }
}

export { TurnContentDone };
