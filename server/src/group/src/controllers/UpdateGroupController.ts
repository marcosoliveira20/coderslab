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

		const group = new Group();

		try {
			const data = group.update({
				id,
				name,
				category,
				subject,
				is_public,
				user_list,
				schedule_list
			});

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

export { UpdateGroupController };