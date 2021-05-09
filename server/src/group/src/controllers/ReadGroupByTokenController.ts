import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByTokenController {
	async handle(request: Request, response: Response) {
		const { token } = request.params;

		const group = new Group();

		try {
			const data = await group.readByToken(token);

			if(!data) {
				return response.status(404).send();
			}

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupByTokenController };