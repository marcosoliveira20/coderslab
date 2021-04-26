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

		const createGroup = new Group();

		try {
			const group = createGroup.create({
				id,
				name,
				category,
				subject,
				is_public,
				user_list,
				schedule_list
			});

			return response.status(group.status).send(group.message);
		} catch(err) {
			return response.status(403);
		}
	}
}

export { CreateGroupController };