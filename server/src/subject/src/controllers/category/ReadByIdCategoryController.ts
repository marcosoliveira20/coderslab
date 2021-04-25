import { Request, Response } from "express";

import { Category } from "../../model/Category";

export default class ReadByIdSubjectController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const readCategoryById = new Category();

    try {
      const envio = readCategoryById.readById({ id });
      return response.status(envio.status).send(envio.category);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
