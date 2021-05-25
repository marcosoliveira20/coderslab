import { Request, Response } from "express";

import { Interests } from "../model/Interests";
import Api from "../../../Api";

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

      const api = new Api();
      let interest = null;

      try {
        const subject = await api.subject.get(
          `/read/byId/${data._id_subject}`
        );
        interest = {
          _id: data._id,
          _id_user: data._id_user,
          subject: subject.data,
          level: data.level,
        };
      } catch (err) {
        console.log(err);
        return response.status(err.response.status).send();
      }

      return response.status(200).send(interest);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdateInterestController };
