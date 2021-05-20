import { Request, Response } from "express";

import { Group } from "../model/Group";

class CreateGroupController {
	async handle(request: Request, response: Response) {
		const {
			name,
			category,
			subject_label,
			level,
			is_public,
			is_default,
			_owner
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
  				token: Math.random().toString(36).substring(8),
				is_public,
				is_default,
				_owner
			});

			return response.status(201).send();
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { CreateGroupController };