import { Request, Response } from "express";

import { Group } from "../model/Group";

class UpdateGroupController {
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

		const updateGroup = new Group();

		try {
			const group = updateGroup.update({
				id,
				name,
				category,
				subject,
				is_public,
				user_list,
				schedule_list
			});


			response.status(group.status).json({message: group.message, group: group.data});
		} catch(err) {
			response.status(404);
		}
	}
}

export { UpdateGroupController };