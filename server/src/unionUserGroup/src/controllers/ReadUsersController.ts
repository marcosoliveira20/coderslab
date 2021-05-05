import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";

class ReadUsersController {
	async handle(request: Request, response: Response) {
		const { idGroup } = request.params;

		const union = new UnionUserGroup();

		try {
			const data = await union.readUsers(idGroup);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { ReadUsersController };