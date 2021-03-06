import { hash } from "bcrypt";
import { Request, Response } from "express";

import { User } from "../model/User";
import Api from "../../../Api";

class CreateUserController {
  async handle(request: Request, response: Response) {
    const {
      username,
      name,
      last_name,
      email,
      discord_id,
      github_id,
      password,
      interest_list
    } = request.body;

    const user = new User();

    try {
      const findUsername = await user.readByUsername(username);
      const findEmail = await user.readByEmail(email);

      if (findUsername || findEmail) {
        return response.status(403).send();
      }

      const passwordHash = await hash(password, 8);

      let data = await user.create({
        username,
        name,
        last_name,
        email,
        discord_id,
        github_id,
        password: passwordHash,
      });

      const api = new Api();

      if(interest_list.length == 0) {
        return response.status(201).send(data);
      }

      try {
        for(let i = 0; i < interest_list.length; i++) {
          interest_list[i]._id_user = data._id;
          const interest = await api.interests.post("/create", interest_list[i]);
          interest_list[i] = interest.data;
        }
      } catch(err) {
        await api.interests.delete(`/delete/byUserId/${data._id}`);
        return response.status(err.response.status).send();
      }
      
      return response.status(201).send(data);

    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateUserController };
