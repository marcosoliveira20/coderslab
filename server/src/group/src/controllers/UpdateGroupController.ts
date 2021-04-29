import { Request, Response } from "express";

import { Group } from "../model/Group";

class UpdateGroupController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const {
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
			const findIndex = await group.readById(id);
			const findOwner = await group.readOwner(id);

			if(!findIndex) {
				return response.status(404).send("Group does not exist");
			} else if(findOwner != idUser) {
				return response.status(401).send();
			}

			const data = await group.update(id, {
				name,
				category,
				subject,
				is_public,
				_owner,
				_user_list,
				_schedule_list
			});

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { UpdateGroupController };