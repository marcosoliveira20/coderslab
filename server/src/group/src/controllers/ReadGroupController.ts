import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupController {
	async handle(request: Request, response: Response) {
		const {
			id
		} = request.body;

		const readGroup = new Group();

		try {
			const group = readGroup.read({
				id
			});

			response.status(group.status).json({message: group.message, group: group.data});
		} catch(err) {
			response.status(404);
		}
	}
}

export { ReadGroupController };