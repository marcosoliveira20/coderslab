import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";
import Api from "../../../Api";

class ReadAllUsersByGroupController {
	async handle(request: Request, response: Response) {
		const { idGroup } = request.params;

		const union = new UnionUserGroup();

		try {
			const data = await union.readAllUsersByGroup(idGroup);

			const api = new Api();

			try {
				for(let i = 0; i < data.length; i++) {
					let user = await api.user.get(`/read/byId/${data[i]._id_user}`);
					data[i] = user.data;
				}

			} catch(err) {
				return response.status(err.response.status).send();
			}

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadAllUsersByGroupController };