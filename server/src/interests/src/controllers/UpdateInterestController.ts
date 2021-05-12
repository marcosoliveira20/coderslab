import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class UpdateInterestController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const {
      _id_user,
      _id_subject,
      level
    } = request.body;

    const interests = new Interests();

    try {
      if(level < 0 || level > 2) {
        return response.status(406).send();
      }
      
      const findIndex = await interests.readById(id);

      if(!findIndex) {
        return response.status(404).send();
      } else if(findIndex._id_subject != _id_subject || findIndex._id_user != _id_user) {
          return response.status(406).send();
      }

      const data = await interests.update(id, {
        _id_user,
        _id_subject,
        level
      });

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdateInterestController };
