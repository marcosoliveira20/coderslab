import { Request, Response } from "express";

import { Api } from "../../../api";
import { Interests } from "../model/Interests";

class ReadInterestByIdController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const interests = new Interests();

    try {
      const data = await interests.readById(id);

      if (!data) {
        return response.status(404).send();
      }

      const api = new Api();
      const interest = null;

      try {
        const subject = await api.subject.get(
          `/subject/read/byId/${data._id_subject}`
        );
        interest = {
          user: data._id_user,
          subject: subject.data,
          level: data.level,
        };
      } catch (err) {
        console.log(err);
      }

      return response.status(200).send(interest);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadInterestByIdController };
