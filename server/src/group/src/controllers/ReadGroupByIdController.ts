import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByIdController {
	async handle(request: Request, response: Response) {
		const {
			id
		} = request.params;

		const readGroup = new Group();

		try {
			const group = readGroup.readById({
				id
			});

			response.status(group.status).json({message: group.message, group: group.data});
		} catch(err) {
			response.status(404);
		}
	}
}

export { ReadGroupByIdController };