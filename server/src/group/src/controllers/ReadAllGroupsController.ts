import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadAllGroupsController {
	async handle(request: Request, response: Response) {
		const group = new Group();

		try {
			const data = group.readAll();

			response.status(data.status).send(data.groups);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { ReadAllGroupsController };