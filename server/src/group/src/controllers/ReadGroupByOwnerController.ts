import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupByOwnerController {
	async handle(request: Request, response: Response) {
		const { idUser } = request.params;

		const group = new Group();

		try {
			const data = await group.readByOwner(idUser);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupByOwnerController };