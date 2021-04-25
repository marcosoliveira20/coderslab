import { Request, Response } from "express";

import { Category } from "../../model/Category";

export default class DeleteCategoryController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const deleteCategory = new Category();

    try {
      const envio = deleteCategory.delete({ id });
      return response.status(envio.status).send(envio.message);
    } catch (err) {
      return response.status(400).send("Bad Request");
    }
  }
}
