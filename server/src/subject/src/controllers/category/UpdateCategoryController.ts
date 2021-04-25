import { Request, Response } from "express";

import { Category } from "../../model/Category";

export default class UpdateSubjectController {
  async handle(request: Request, response: Response) {
    const { id, label } = request.body;

    const updateCategory = new Category();

    try {
      const envio = updateCategory.update({ id, label });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
