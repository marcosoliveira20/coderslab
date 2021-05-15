import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByLevelController {
	async handle(request: Request, response: Response) {
		const { level } = request.params;
        
        let newLevel: number;
        newLevel = parseInt(level);

        if(newLevel < 0 || newLevel > 2) {
            return response.status(406).send();
        }

		const group = new Group();

		try {
			const data = await group.readByLevel(newLevel);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupByLevelController };