import { Request, Response } from "express";

import { Category } from "../../model/Category";

export default class CreateSubjectController {
  async handle(request: Request, response: Response) {
    // TODO ser somente label por que id vem do BD
    const { id, label } = request.body;

    const createCategory = new Category();

    try {
      const envio = createCategory.create({ id, label });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
