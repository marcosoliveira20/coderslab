import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByCategoryController {
	async handle(request: Request, response: Response) {
		const { category } = request.params;

		const group = new Group();

		try {
			const data = await group.readByCategory(category);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupByCategoryController };