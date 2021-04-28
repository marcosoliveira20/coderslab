import { Request, Response } from "express";

import { Interests } from "../model/Interests";

class UpdateInterestController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;

    const {
        subject_label,
        level
    } = request.body;

    const interests = new Interests();

    try {
      if(level < 0 || level > 2) {
        return response.status(406).send();
      }
      
      const findIndex = await interests.readById(id);

      if(!findIndex) {
        return response.status(404).send("User does not exist");
      } 
      // else if(findIndex.subject_label === subject_label) {
      //   return response.status(406).send();
      // }

      const data = await interests.update(id, {subject_label, level});

      return response.status(200).send(data);
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { UpdateInterestController };
