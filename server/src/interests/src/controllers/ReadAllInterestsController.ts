import { Request, Response } from "express";

import { Interests } from "../model/Interests";
import Api  from "../../../Api";

class ReadAllInterestsController {
  async handle(request: Request, response: Response) {
    const interests = new Interests();

    try {
      const data = await interests.readAll();

      const api = new Api();
      let interest_list = [];

      try {
        for(let i = 0; i < data.length; i++) {
          const subject = await api.subject.get(
            `/read/byId/${data[i]._id_subject}`
          );

          const interest = {
            _id: data[i]._id,
            _id_user: data[i]._id_user,
            subject: subject.data,
            level: data[i].level,
          };

          interest_list.push(interest);
        }

      } catch (err) {
        console.log(err);
        return response.status(err.response.status).send();
      }

      return response.status(200).send(interest_list);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadAllInterestsController };