import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";
import Api from "../../../Api";

class ReadAllGroupsController {
	async handle(request: Request, response: Response) {

		const union = new UnionUserGroup();

		try {

			const api = new Api();

			try {
				let groups = (await api.group.get(`/read/all`)).data;
				if(groups !== []) {
					for(let i = 0; i < groups.length; i++) {
						groups[i].number_members = (await union.readAllUsersByGroup(groups[i]._id_group)).length;
						
						if(!groups[i].next_schedule) {
							groups[i].next_schedule = null;
						}
					}
				}

				response.status(200).send(groups);
			} catch(err) {
				return response.status(err.response.status).send();
			}

		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadAllGroupsController };