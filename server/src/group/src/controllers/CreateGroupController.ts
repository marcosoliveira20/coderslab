import { Request, Response } from "express";

import { Group } from "../model/Group";

class CreateGroupController {
	async handle(request: Request, response: Response) {
		const {
			id,
			name,
			category,
			subject,
			is_public,
			user_list,
			schedule_list
		} = request.body;

		const group = new Group();

		try {
			const data = group.create({
				id,
				name,
				category,
				subject,
				is_public,
				user_list,
				schedule_list
			});

			return response.status(data.status).send(data.message);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { CreateGroupController };