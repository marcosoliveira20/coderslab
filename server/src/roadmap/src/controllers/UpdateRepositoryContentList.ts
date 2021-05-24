import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";

class UpdateRepositoryContentList {
  async handle(request: Request, response: Response) {
    const { _id } = request.params;

    const { content_list } = request.body;

    const roadmap = new Roadmap();

    try {
      const data = await roadmap.updateContent_list(_id, content_list);

      console.log(data)

      return response.status(200).send(data);

    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { UpdateRepositoryContentList };
