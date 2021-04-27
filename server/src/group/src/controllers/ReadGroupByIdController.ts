import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByIdController {
	async handle(request: Request, response: Response) {
		const {
			id
		} = request.params;

		const group = new Group();

		try {
			const data = group.readById(id);

			if(!data.group) {
				return response.status(data.status).send(data.message);
			  }

			response.status(data.status).send(data.group);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { ReadGroupByIdController };