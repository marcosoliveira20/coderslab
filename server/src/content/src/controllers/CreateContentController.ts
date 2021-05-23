import { Request, Response } from "express";

import { Content } from "../model/Content";
import Api from "../../../Api";

class CreateContentController {
  async handle(request: Request, response: Response) {
    const {
      title,
      description,
      deadline,
      reference,
      challenge,
      _roadmap_id,
    } = request.body;

    const content = new Content();
    const api = new Api();

    try {
      const data = await content.create({
        title,
        description,
        deadline,
        reference,
        challenge,
        _roadmap_id
      });

      let new_challenge
      let new_challenge_list = []
      for(let i = 0; i < challenge.length; i++) {
        challenge[i].content_id = data._id;
        console.log(challenge[i])
        new_challenge = await api.challenge.post("/create/By/Roadmap", challenge[i]);
        new_challenge_list.push(new_challenge.data)
      }

      return response.status(201).send(data);
    } catch(err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { CreateContentController };
