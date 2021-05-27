import { Request, Response } from "express";

import { UnionUserGroup } from "../model/UnionUserGroup";
import Api from "../../../Api";

class ReadAllGroupsBySearchController {
	async handle(request: Request, response: Response) {
		const { 
            name,
            subject_label,
            category,
            level,
            is_alphabetical
        } = request.body;

        const union = new UnionUserGroup();

		try {
			const api = new Api();
			let data;

			try {
				data = (await api.group.post("/read/search", {
                    name,
                    subject_label,
                    category,
                    level,
                    is_alphabetical
                })).data;

				for(let i = 0; i < data.length; i++) {
					data[i].number_members = (await union.readAllUsersByGroup(data[i]._id)).length;

					if(!data[i].next_schedule) {
						data[i].next_schedule = null;
					}
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

export { ReadAllGroupsBySearchController };