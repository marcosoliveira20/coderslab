import { Request, Response } from "express";

import { Group } from "../model/Group";
import Api from "../../../Api";

class DeleteGroupController {
	async handle(request: Request, response: Response) {
		const { id, idUser } = request.params;

		const group = new Group();
		
		try {
			const findIndex = await group.readById(id);
			
			if(!findIndex) {
				return response.status(404).send();
			} 
			
			if(findIndex._owner != idUser) {
				return response.status(401).send();
			}
			
			await group.delete(id);

			const api = new Api();

			try {
				await api.unionUserGroup.delete(`/delete/allGroup/${id}`);
			} catch(err) {
				return response.status(err.response.status).send();
			}

			return response.status(204).send();
		} catch(err) {
			console.log(err.message);
			return response.status(400).send();
		}
	}
}

export { DeleteGroupController };