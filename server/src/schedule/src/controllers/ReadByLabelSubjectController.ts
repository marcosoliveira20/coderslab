import { Request, Response } from "express";

import { Schedulee } from "../modelSchedulele";

export default class ReadByLabelScheduleeController {
  async handle(request: Request, response: Response) {
    const { label } = request.params;

    const Schedulee = newSchedulele();

    try {
      const data = Schedulee.readByLabel(label);
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
