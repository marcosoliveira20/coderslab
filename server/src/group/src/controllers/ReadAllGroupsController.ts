import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadAllGroupsController {
	async handle(request: Request, response: Response) {
		const group = new Group();

		try {
			const data = await group.readAll();

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadAllGroupsController };