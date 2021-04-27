import { Request, Response } from "express";

import { Group } from "../model/Group";

class DeleteGroupController {
	async handle(request: Request, response: Response) {
		const {
			id
		} = request.params;

		const group = new Group();

		try {
			const data = group.delete(id);

			if(!data.message) {
				return response.status(data.status).send();
			  }

			return response.status(data.status).send(data.message);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { DeleteGroupController };