import { Request, Response } from "express";

import { Content } from "../model/Content";

class UpdateContenReferenceController {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { reference } = request.body;

    const content = new Content();

    try{
      const roadmapAlreadyExists = await content.readById(_id);

      if (roadmapAlreadyExists) {
        try {
          const data = await content.updateReference(_id, reference);

          return response.status(201).send(data);

        } catch (err) {
          console.log(err.message);
          return response.status(400).json({error: "Bad request"});
        }
      } else {
        return response.status(404).json({error: "Roadmap not found"});
      }
    } catch (err) {
      console.log(err.message);
      response.status(400).json({error: "Bad request"})
    }
  }
}

export { UpdateContenReferenceController };
