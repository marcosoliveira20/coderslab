import { Request, Response } from "express";

import { Content } from "../model/Content";

class DeleteContentByRoadmapIDController {
  async handle(request: Request, response: Response) {
    const {
      _id
    } = request.params;

    const content = new Content();

    try{
      const contentAlreadyExists = await content.deleteByRoadmapId(_id);

      if(contentAlreadyExists){
        try {
          await content.delete(_id);

          return response.status(204).send();
        } catch (err) {

          console.log(err.message);
          return response.status(400).json({error: "Bad Request"});
        }
      } else {
        return response.status(404).json({error: "Bad Request"});
      }
    } catch (err) {
      console.log(err.message);
      return response.status(400).json({error: "Bad Request"});
    }
  }
}

export { DeleteContentByRoadmapIDController };
