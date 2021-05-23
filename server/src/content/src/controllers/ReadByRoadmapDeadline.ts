import { Request, Response } from "express";

import { Content } from "../model/Content";

class ReadByRoadmapDeadline {
  async handle(request: Request, response: Response) {
    const { _roadmap_id } = request.params;

    const { requested_date } = request.query;

    const content = new Content();

    try {
      const data = await content.readByRoadmapDeadlineContents(_roadmap_id, requested_date as String)

      const quantity_roadmap = await content.readByRoadmapId(_roadmap_id)

      let percentDone = Math.round((data.length / quantity_roadmap.length) * 100)

      if(!data) {
        return response.status(404).send("Content not found");
      }

      return response.status(200).json({data, percentDone});
    } catch (err) {
      console.log(err.message);
      return response.status(400).send("Bad Request");
    }
  }
}

export { ReadByRoadmapDeadline };
