import { Request, Response } from "express";

import { Category } from "../../model/Category";

export default class ReadAllSubjectController {
  async handle(request: Request, response: Response) {
    const readAllCategory = new Category();

    try {
      const envio = readAllCategory.readAll();
      if (envio.categories.length === 0) {
        return response.status(envio.status).send(envio.categories);
      }
      return response.status(envio.status).send(envio.categories);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
