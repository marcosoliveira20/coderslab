import { Request, Response } from "express";

import { Group } from "../model/Group";
import Api from "../../../Api";

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

			let categoryList = [];

			for(let i = 0; i < category.length; i++) {
				categoryList.push(category[i].name);
			}

			const data = await group.create({
				name,
				category: categoryList,
				subject_label,
				level,
  				token: Math.random().toString(36).substring(8),
				is_public,
				is_default,
				_owner
			});

			const api = new Api();

			try {
				await api.unionUserGroup.post("/create", {
					_id_user: data._owner,
					_id_group: data._id
				});
			} catch(err) {
				return response.status(err.response.status).send();
			}

			return response.status(201).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { CreateGroupController };