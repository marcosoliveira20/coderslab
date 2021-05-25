import { Request, Response } from "express";

import { Group } from "../model/Group";
import Api from "../../../Api";

class ReadGroupByIdController {
	async handle(request: Request, response: Response) {
		const { id } = request.params;

		const group = new Group();

		try {
			const data = await group.readById(id);

			if(!data) {
				return response.status(404).send();
			}

			const api = new Api();

			try {
				const schedule = (await api.schedule.get(`/read/byIdGroup/nextSchedule/${id}`)).data;
				data.next_schedule = schedule.datetime;
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

export { ReadGroupByIdController };