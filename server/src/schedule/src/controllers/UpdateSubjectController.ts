import { Request, Response } from "express";

import { Schedulee } from "../modelSchedulele";

export default class UpdateScheduleeController {
  async handle(request: Request, response: Response) {
    const { id, label, categories } = request.body;

    const Schedulee = newSchedulele();

    try {
      const data = Schedulee.update({ id, label, categories });
      if (!data.Schedulee) {
        return response.status(data.status).send(data.message);
      }
      return response.status(data.status).send(data.Schedulee);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}
