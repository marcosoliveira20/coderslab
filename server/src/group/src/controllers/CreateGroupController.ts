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
			_owner,
			_user_list,
			_schedule_list
		} = request.body;

		const group = new Group();

		try {
			await group.create({
				name,
				category,
				subject,
				is_public,
				_owner,
				_user_list,
				_schedule_list
			});

			return response.status(201).send("Group created");
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { CreateGroupController };