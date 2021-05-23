import { Request, Response } from "express";

import { User } from "../model/User";
import Api from "../../../Api";

class ReadUserByEmailController {
  async handle(request: Request, response: Response) {
    const { email } = request.params;

    const user = new User();

    try {
      const data = await user.readByEmail(email);

      if(!data) {
        return response.status(404).send();
      }

      const api = new Api();

      try {
        const interest_list = await api.interests.get(`/read/byUserId/${data._id}`);
        data.interest_list = interest_list.data;

      } catch(err) {
        return response.status(err.response.status).send();
      }

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { ReadUserByEmailController };
