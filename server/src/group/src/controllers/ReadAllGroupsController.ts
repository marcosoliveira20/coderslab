import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadAllGroupsController {
	async handle(request: Request, response: Response) {
		const readGroups = new Group();

		try {
			const groups = readGroups.readAll();

			response.status(groups.status).json({message: groups.message, groups: groups.data});
		} catch(err) {
			response.status(404);
		}
	}
}

export { ReadAllGroupsController };