import { Request, Response } from "express";

import { Group } from "../model/Group";

class UpdateGroupController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const {
			name,
			category,
			subject_label,
			level,
  			token,
			is_public,
			_owner,
			_schedule_list
		} = request.body;

		const group = new Group();

		try {
			if(level < 0 || level > 2) {
				return response.status(406).send();
			}
			
			const findIndex = await group.readById(id);
			
			if(!findIndex) {
				return response.status(404).send("Group does not exist");
			} 
			
			if(findIndex._owner != idUser) {
				return response.status(401).send();
			}

			const data = await group.update(id, {
				name,
				category,
				subject_label,
				level,
  				token,
				is_public,
				_owner,
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