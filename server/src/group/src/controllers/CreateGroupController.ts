import { Request, Response } from "express";

import { Group } from "../model/Group";

class CreateGroupController {
	async handle(request: Request, response: Response) {
		const {
			name,
			category,
			subject_label,
			level,
  			token,
			is_public,
			_owner,
			_user_list,
			_schedule_list
		} = request.body;

		const group = new Group();

		try {
			if(level < 0 || level > 2) {
				return response.status(406).send();
			}

			await group.create({
				name,
				category,
				subject_label,
				level,
  				token,
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