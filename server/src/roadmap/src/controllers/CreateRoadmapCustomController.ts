import { Request, Response } from 'express';

import Api from '../../../Api';
import { Roadmap } from '../model/Roadmap';

class CreateRoadmapCustomController {
  async handle(request: Request, response: Response) {
    const { name, objective, content_list, level } = request.body;

    const { user_id } = request.query;

    const roadmap = new Roadmap();
    const api = new Api();

    const quantityChallenge = 0;

    try {
      const data = await roadmap.createCustom({
        name,
        objective,
        level,
        quantity_contents: content_list.length,
        quantity_challenges: quantityChallenge,
        user_id,
      });

      await roadmap.updateQuantityOfContents(data._id, content_list.length);

      data.quantity_contents = content_list.length;
      data.quantity_challenges = quantityChallenge;

      if (content_list.length == 0) {
        return response.status(201).send(data);
      }
      try {
        for (let i = 0; i < content_list.length; i++) {
          content_list[i]._roadmap_id = data._id;
          const new_content_list = await api.content.post(
            'create/By/Roadmap/Custom',
            content_list[i],
          );
          content_list[i] = new_content_list.data;
        }
      } catch (err) {
        await roadmap.delete(data._id);
        await api.content.delete(`/delete/roadmapid/${data._id}`);

        console.log(err.response.message);
        return response.status(err.response.status).send();
      }
      await roadmap.updateContent_list(data._id, content_list);
      data.content_list = content_list;

      return response.status(201).json({ data });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send();
    }
  }
}

export { CreateRoadmapCustomController };
