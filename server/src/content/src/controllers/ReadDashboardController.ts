import { Request, Response } from 'express';

import { Content } from '../model/Content';

class ReadDashboardController {
  async handle(request: Request, response: Response) {
    const { _roadmap_id } = request.query;

    const today = new Date(
      new Date().valueOf() - new Date().getTimezoneOffset() * 60000,
    );

    const content = new Content();

    try {
      const total = await content.readQuantity(_roadmap_id);

      const done = await content.readQuantityInProgress(_roadmap_id);

      const late = await content.readLateContents(_roadmap_id, today);

      const percentInProgress = Math.round((done.length / total.length) * 100);

      if (!total) {
        return response.status(404).send('Content not found');
      }

      return response.status(200).json({
        total: total.length,
        done: done.length,
        late: late.length,
        percentInProgress,
      });
    } catch (err) {
      console.log(err.message);
      return response.status(400).send('Bad Request');
    }
  }
}

export { ReadDashboardController };
