import { Request, Response } from "express";

import { Content } from "../model/Content";

class ReadAllContentController {
  async handle(request: Request, response: Response) {
    const content = new Content();

    try {
      const data = await content.readAll();

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadAllContentController };
