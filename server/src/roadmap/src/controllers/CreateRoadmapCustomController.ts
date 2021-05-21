import { Request, Response } from "express";

import { Roadmap } from "../model/Roadmap";
import Api from "../../../Api";

class CreateRoadmapCustomController {
  async handle(request: Request, response: Response) {
    const {
      name,
      objective,
      content_list,
      level
    } = request.body;

    const roadmap = new Roadmap();

    try {
      const data_roadmap = await roadmap.createCustom({
        name,
        objective,
        level
      });

      const api = new Api();

      if(content_list.length == 0) {
        return response.status(201).send(data_roadmap);
      }

      let const_list = []
      try {
        for(let i = 0; i < content_list.length; i++) {
          content_list[i]._roadmap_id = data_roadmap._id;
          let content = await api.content.post("/create", content_list[i]);
          const_list.push(content)
        }
      } catch(err) {
        await roadmap.delete(data_roadmap._id)
        await api.content.delete(`/delete/roadmapid/${data_roadmap._id}`);

        console.log(err.message)
        return response.status(err.response.status).send();
      }

      return response.status(201).json({data_roadmap, content_list});
    } catch(err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateRoadmapCustomController };
