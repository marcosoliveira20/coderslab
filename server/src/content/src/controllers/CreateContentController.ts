import { Request, Response } from "express";

import { Content } from "../model/Content";

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

    const findByTitle = await content.readByTitle(title)

    const contentAlreadyExists = findByTitle && findByTitle._roadmap_id ===  _roadmap_id ? true : false

    console.log(findByTitle)

    if(!contentAlreadyExists) {
      try {
        const data = await content.create({
          title,
          description,
          deadline,
          reference,
          challenge,
          _roadmap_id
        });

        return response.status(201).send(data);
      } catch(err) {
        console.log(err.message);
        return response.status(400).send("Bad Request");
      }
    } else {
      return response.status(409).json({error: "Content already exists"})
    }
  }
}

export { CreateContentController };
