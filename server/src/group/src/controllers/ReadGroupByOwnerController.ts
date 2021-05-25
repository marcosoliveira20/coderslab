import { Request, Response } from "express";

import { Group } from "../model/Group";
import Api from "../../../Api";

class ReadGroupByOwnerController {
	async handle(request: Request, response: Response) {
		const { idUser } = request.params;

		const group = new Group();

		try {
			const data = await group.readByOwner(idUser);

			const api = new Api();

			try {
				for(let i = 0; i < data.length; i++) {
					const schedule = (await api.schedule.get(`/read/byIdGroup/nextSchedule/${data[i]._id}`)).data;
					if(!schedule.datetime) {
						data[i].next_schedule = null;
					} else {
						data[i].next_schedule = schedule.datetime;
					}
				}
			} catch(err) {
				console.log(err.response);
				return response.status(err.response.status).send();
			}

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupByOwnerController };