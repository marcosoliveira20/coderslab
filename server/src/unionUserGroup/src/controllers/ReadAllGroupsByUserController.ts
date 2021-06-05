import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";
import Api from "../../../Api";

class ReadAllGroupsByUserController {
	async handle(request: Request, response: Response) {
		const { idUser } = request.params;

		const union = new UnionUserGroup();

		try {
			const data = await union.readAllGroupsByUser(idUser);

			const api = new Api();

			try {
				for(let i = 0; i < data.length; i++) {
					let group = (await api.group.get(`/read/byId/${data[i]._id_group}`)).data;
					group.number_members = (await union.readAllUsersByGroup(data[i]._id_group)).length;
					
					if(!group.next_schedule) {
						group.next_schedule = null;
					}

					data[i] = group;
				}

			} catch(err) {
				console.log("oi");
				return response.status(err.response.status).send();
			}

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadAllGroupsByUserController };