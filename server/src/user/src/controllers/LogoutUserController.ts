import { Request, Response } from "express";

class LogoutUserController {
  async handle(request: Request, response: Response) {
    const {
        id,
        token
    } = request.params;

    try {
        console.log(id);
        console.log(token);

        return response.status(200).send();
    } catch(err) {
        console.log(err.message);
        return response.status(400).send();
    }
  }
}

export { LogoutUserController };
