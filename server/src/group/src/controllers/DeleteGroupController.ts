import { Request, Response } from "express";

import { Group } from "../model/Group";

class DeleteGroupController {
	async handle(request: Request, response: Response) {
		const {
			id
		} = request.params;

		const deleteGroup = new Group();

		try {
			const group = deleteGroup.delete({
				id
			});

			return response.status(group.status).send(group.message);
		} catch(err) {
			return response.status(404);
		}
	}
}

export { DeleteGroupController };