import { Request, Response } from "express";

import { Group } from "../model/Group";

class ReadGroupBySubjectController {
	async handle(request: Request, response: Response) {
		const { subjectLabel } = request.params;

		const group = new Group();

		try {
			const data = await group.readBySubject(subjectLabel);

			response.status(200).send(data);
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { ReadGroupBySubjectController };