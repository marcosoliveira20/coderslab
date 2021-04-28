import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByNameController {
	async handle(request: Request, response: Response) {
		const { name } = request.params;

		const group = new Group();

		try {
			const data = await group.readByName(name);

			if(!data) {
				return response.status(404).send("User does not exist");
			}

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { ReadGroupByNameController };