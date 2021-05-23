import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";
import Api from "../../../Api";

class ReadAllGroupsByOwnerController {
	async handle(request: Request, response: Response) {
		const { idUser } = request.params;

		const union = new UnionUserGroup();

		try {
			const api = new Api();
			let data;

			try {
				data = (await api.group.get(`/read/byOwner/${idUser}`)).data;

				for(let i = 0; i < data.length; i++) {
					data[i].number_members = (await union.readAllUsersByGroup(data[i]._id)).length;
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

export { ReadAllGroupsByOwnerController };