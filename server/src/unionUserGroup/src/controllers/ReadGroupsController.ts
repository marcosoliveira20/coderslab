import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";

class ReadGroupsController {
	async handle(request: Request, response: Response) {
		const { idUser } = request.params;

		const union = new UnionUserGroup();

		try {
			const data = await union.readGroups(idUser);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { ReadGroupsController };