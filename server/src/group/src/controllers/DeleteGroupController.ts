import { Request, Response } from "express";

import { Group } from "../model/Group";

class DeleteGroupController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const group = new Group();

		try {
			const findIndex = await group.readById(id);

			if(!findIndex) {
				return response.status(404).send("Group does not exist");
			} 
			// else if(findIndex._owner !== idUser) {
			// 	return response.status(401).send();
			// }
			
			await group.delete(id);

			return response.status(204).send();
		} catch(err) {
			console.log(err.message);
			return response.status(400).send("Bad Request");
		}
	}
}

export { DeleteGroupController };